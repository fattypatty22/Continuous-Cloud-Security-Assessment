const resources = [
  { id: "vm-1", monitoring: true, firewall: true },
  { id: "db-1", monitoring: false, firewall: true },
];

function validate(resources) {
  return resources.map((r) => {
    const issues = [];

    if (!r.monitoring) issues.push("Monitoring disabled");
    if (!r.firewall) issues.push("Firewall missing");

    return {
      resource: r.id,
      valid: issues.length === 0,
      issues,
    };
  });
}

console.log(validate(resources));
