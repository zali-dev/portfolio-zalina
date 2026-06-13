import styled, { keyframes } from 'styled-components';

const glitch = keyframes`
  0% { text-shadow: none; }
  92% { text-shadow: none; }
  93% { text-shadow: 2px 0 #ff00ea, -2px 0 #00ff41; }
  94% { text-shadow: none; }
  96% { text-shadow: -1px 0 #ff00ea, 1px 0 #00ff41; }
  97% { text-shadow: none; }
  100% { text-shadow: none; }
`;

export const TerminalWrapper = styled.div`
  position: relative;
  z-index: 10;
  width: 90%;
  max-width: 850px;
  height: 75vh;
  margin: 0 auto;
  background: rgba(5, 5, 5, 0.92);
  backdrop-filter: blur(20px);
  border: 1px solid #1a1a1a;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  box-shadow: 
    0 0 40px rgba(0, 255, 65, 0.05),
    inset 0 0 40px rgba(0, 255, 65, 0.02);
  animation: ${glitch} 5s infinite;
  
  /* Scanline effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.03) 2px,
      rgba(0, 0, 0, 0.03) 4px
    );
    pointer-events: none;
    z-index: 100;
  }
`;

export const TerminalHeader = styled.div`
  display: flex;
  padding: 14px 18px;
  background: #0d0d0d;
  border-bottom: 1px solid #1a1a1a;
  align-items: center;
  font-size: 13px;
  color: #666;
  border-radius: 12px 12px 0 0;
`;

export const Dot = styled.span`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: ${props => props.color};
  margin-right: 8px;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.5);
  }
`;

export const TerminalBody = styled.div`
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  font-size: 14px;
  line-height: 1.8;
  color: #999;
  position: relative;
  z-index: 101;
`;

export const InputLine = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  padding: 8px 0;
  border-top: 1px solid #111;
`;

export const Prompt = styled.span`
  color: #00ff41;
  margin-right: 12px;
  font-weight: 700;
  font-size: 15px;
  text-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  color: #ffffff;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  flex: 1;
  outline: none;
  caret-color: #00ff41;
  
  &::placeholder {
    color: #333;
  }
`;

export const PreBlock = styled.pre`
  color: ${props => props.color || '#ccc'};
  white-space: pre-wrap;
  margin: 4px 0;
  font-family: 'JetBrains Mono', monospace;
`;

export const AsciiArt = styled.pre`
  color: #6272a4;
  font-size: 12px;
  line-height: 1.2;
  margin-bottom: 20px;
  text-shadow: 0 0 10px rgba(98, 114, 164, 0.3);
`;