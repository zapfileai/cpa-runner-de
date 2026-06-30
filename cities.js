const delawareCities = [
  "Bear", "Bethany Beach", "Bethel", "Bridgeville", "Camden Wyoming",
  "Claymont", "Clayton", "Dagsboro", "Delaware City", "Delmar",
  "Dover", "Felton", "Frankford", "Frederica", "Georgetown",
  "Greenwood", "Harbeson", "Harrington", "Hartly", "Hockessin",
  "Houston", "Kirkwood", "Laurel", "Lewes", "Lincoln",
  "Magnolia", "Middletown", "Milford", "Millsboro", "Milton",
  "Montchanin", "Nassau", "New Castle", "Newark", "Ocean View",
  "Rehoboth Beach", "Rockland", "Seaford", "Selbyville", "Smyrna",
  "Townsend", "Viola", "Wilmington",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < delawareCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(delawareCities[i]);
}

module.exports = { batches };
