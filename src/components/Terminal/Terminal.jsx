import React, { useState, useRef, useEffect } from 'react';
import useCommandHandler from '../../hooks/useCommandHandler';
import {
  TerminalWrapper,
  TerminalHeader,
  Dot,
  TerminalBody,
  InputLine,
  Prompt,
  Input,
  PreBlock,
  AsciiArt
} from './Terminal.styles';

const Terminal = ({ onSpecialCommand }) => {
  const { history, executeCommand } = useCommandHandler();
  const [currentInput, setCurrentInput] = useState('');
  const [inputHistory, setInputHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    
    const input = currentInput.trim();
    if (input) {
      setInputHistory(prev => [...prev, input]);
      setHistoryIndex(-1);
      
      const result = executeCommand(input);
      if (result?.special) {
        onSpecialCommand?.(result.special);
      }
    }
    
    setCurrentInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (inputHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? inputHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(inputHistory[newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= inputHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(inputHistory[newIndex] || '');
        }
      }
    }
  };

  const handleHeaderClick = (action) => {
    if (action === 'close') {
      executeCommand('clear');
    }
  };

  return (
    <TerminalWrapper>
      <TerminalHeader>
        <Dot color="#ff5f56" onClick={() => handleHeaderClick('close')} />
        <Dot color="#ffbd2e" onClick={() => handleHeaderClick('minimize')} />
        <Dot color="#27c93f" onClick={() => handleHeaderClick('maximize')} />
        <span style={{ marginLeft: '16px', letterSpacing: '1px' }}>
          zalina@kernel:~/portfolio
        </span>
      </TerminalHeader>
      
      <TerminalBody ref={bodyRef}>
        <AsciiArt>
{`
 ███████╗ █████╗ ██╗     ██╗███╗   ██╗ █████╗ 
 ╚══███╔╝██╔══██╗██║     ██║████╗  ██║██╔══██╗
   ███╔╝ ███████║██║     ██║██╔██╗ ██║███████║
  ███╔╝  ██╔══██║██║     ██║██║╚██╗██║██╔══██║
 ███████╗██║  ██║███████╗██║██║ ╚████║██║  ██║
 ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝
`}
        </AsciiArt>
        
        <PreBlock color="#6272a4">
{`> Kernel v19.07.2026 | Uptime: 19 years
> Specialization: 09.02.07 | Node: Moscow
> Type 'help' to explore the system.
> Use ↑↓ arrows to navigate command history.
`}
        </PreBlock>

        {history.map((item, index) => (
          <div key={index}>
            {item.type === 'command' ? (
              <PreBlock color="#f8f8f2">{item.text}</PreBlock>
            ) : (
              <PreBlock color={item.color}>{item.text}</PreBlock>
            )}
          </div>
        ))}

        <InputLine>
          <Prompt>❯</Prompt>
          <Input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={(e) => {
              handleKeyDown(e);
              if (e.key === 'Enter') handleCommand(e);
            }}
            spellCheck={false}
            autoComplete="off"
            placeholder="type command..."
          />
        </InputLine>
      </TerminalBody>
    </TerminalWrapper>
  );
};

export default Terminal;