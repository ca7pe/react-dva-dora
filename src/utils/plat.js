export default function getPlat(platId) {
  const plats = {
    '0' : '安卓',
    '1' : 'IOS'
  };
  return plats[platId];
}
