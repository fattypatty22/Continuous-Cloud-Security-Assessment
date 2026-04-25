const baseline = {
  encryption: true,
  publicAccess: false,
};

const current = {
  encryption: false,
  publicAccess: true,
};

function detectDrift(base, current) {
  return Object.keys(base).map((key) => {
    return {
      control: key,
      expected: base[key],
      actual: current[key],
      drift: base[key] !== current[key],
    };
  });
}

console.log(detectDrift(baseline, current));
