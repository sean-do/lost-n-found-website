export default {
  highlight(text, className = "text-highlight") {
    const width = text.length + "ch";
    const uniqueId = "highlightText-" + Math.random().toString(36).slice(2, 9);
    return `<svg class="${className}" style="vertical-align: baseline; height: 0.5em; width: ${width}">
    <defs>
      <text id="${uniqueId}" x="50%" y="100%" text-anchor="middle">
       ${text}
      </text>
    </defs>
    <use href="#${uniqueId}" class="text-highlight-stroke" />
    <use href="#${uniqueId}" class="text-highlight-fill" />
  </svg>`;
  },

  bold(text) {
    return `<span class="text-highlight--red">${text}</span>`;
  },

  question(text) {
    return `<p class="text-question">${text}</p>`;
  },

  // Add more shortcodes here later
};
