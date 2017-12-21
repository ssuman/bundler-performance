export function getTracknameFilter(query) {
  return (activity) => {
    const title = activity.title.toLowerCase();
    return title.indexOf(query) !== -1;
  };
}
