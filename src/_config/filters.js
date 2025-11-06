export default {
  fixRunt(value) {
    if (!value) return "";
    return value.replace(
      /\s+([^\s]+\s+[^\s]+)\s*$/,
      ' <span class="text-no-wrap">$1</span>',
    );
  },
};
