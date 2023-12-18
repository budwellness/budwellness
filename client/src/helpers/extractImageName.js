const extractImageName = (path) => {
  const parts = path.split('/');
  const fileName = parts[parts.length - 1];
  const fileNameWithoutExtension = fileName.split('.')[0];
  return fileNameWithoutExtension;
};

export default extractImageName;
