window.MathJax = {
  loader: {
    load: ['[tex]/enclose', '[tex]/mathtools']
  },
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    packages: {
      '[+]': ['enclose', 'mathtools']
    },
    macros: {
      sweep: "{🧹}",
      bomb: "{💣}",
      rule: ['R_{#2}{#1}', 2, ''],
      abstraction: ['A_{#1}', 1],
      new: ['\\text{new}'],
      updated: ['\\text{updated}'],
      remove: ['\\text{remove } \\left\\lbrace #1 \\right\\rbrace', 1],
      trigger: ['\\text{trigger } \\left\\lbrace #1 \\right\\rbrace', 1],
      r: ['\\enclose{circle}{#1}', 1],
      v: ['\\overset{#2}{#1}', 2],
      or: ['{^{#1}/_{#2}}', 2],
      oror: ['{^{^{\\scriptstyle{#1}}/}{\\scriptstyle{#2}}_{/_{\\scriptstyle{#3}}}}', 3],
      parity: ['{#1{+}2^*}', 1],
    },
    environments: {
      abstraction: ['\\lambda#1.\\begin{rule}', '\\end{rule}', 1],
      rule: ['\\begin{array}{cccc|c}', '\\end{array}'],
    }
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => {
  MathJax.startup.output.clearCache()
  MathJax.typesetClear()
  MathJax.texReset()
  MathJax.typesetPromise()
})