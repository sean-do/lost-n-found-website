export default {
  fixRunt(value) {
    if (!value) return "";
    return value.replace(/\s+([^\s]+)\s*$/, "&nbsp;$1");
  },

  // Add more filters here later
};
