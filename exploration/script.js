document.getElementById('createLabelButton').addEventListener('click', function() {
    const textInput = document.getElementById('textInput').value;
    const textColor = document.getElementById('textColor').value;
    const fontSize = document.getElementById('fontSize').value + 'px';
    const fontFamily = document.getElementById('fontFamily').value;
    const isBold = document.getElementById('boldOption').checked;
    const isItalic = document.getElementById('italicOption').checked;
    const isUnderline = document.getElementById('underlineOption').checked;
    const isNumbered = document.getElementById('numberOption').checked;
  
    const outputLabel = document.getElementById('outputLabel');
    outputLabel.innerHTML = '';
  
    const statements = textInput.split('\n');
    statements.forEach((statement, index) => {
      const label = document.createElement('div');
      label.textContent = isNumbered ? `${index + 1}. ${statement}` : statement;
      label.style.color = textColor;
      label.style.fontSize = fontSize;
      label.style.fontFamily = fontFamily;
      label.style.fontWeight = isBold ? 'bold' : 'normal';
      label.style.fontStyle = isItalic ? 'italic' : 'normal';
      label.style.textDecoration = isUnderline ? 'underline' : 'none';
      outputLabel.appendChild(label);
    });
  });
  
  document.getElementById('copyButton').addEventListener('click', function() {
    const outputLabel = document.getElementById('outputLabel');
    const range = document.createRange();
    range.selectNode(outputLabel);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
  
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        alert('Text copied to clipboard');
      } else {
        alert('Unable to copy text');
      }
    } catch (err) {
      alert('Error copying text: ' + err);
    }
  
    window.getSelection().removeAllRanges();
  });
  