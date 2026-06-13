import { useState, useCallback } from 'react';
import commands from '../utils/commands';

const useCommandHandler = () => {
  const [history, setHistory] = useState([]);

  const executeCommand = useCallback((input) => {
    const cmd = input.trim().toLowerCase();
    
    // Добавляем команду в историю
    setHistory(prev => [...prev, { 
      type: 'command', 
      text: `❯ ${input}` 
    }]);

    // Очистка терминала
    if (cmd === 'clear') {
      setHistory([]);
      return null;
    }

    // Выполнение команды
    const handler = commands[cmd];
    if (handler) {
      const result = handler();
      setHistory(prev => [...prev, {
        type: 'output',
        text: result.output,
        color: result.color,
        special: result.special
      }]);
      return result;
    } else if (cmd !== '') {
      setHistory(prev => [...prev, {
        type: 'output',
        text: `command not found: ${cmd}. Type 'help' for available options.`,
        color: '#ff5555'
      }]);
    }
    
    return null;
  }, []);

  return { history, executeCommand };
};

export default useCommandHandler;