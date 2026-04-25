const resources = [
  { id: "vm-1", encryption: true, publicAccess: false },
  { id: "storage-1", encryption: false, publicAccess: true },
];

function scan(resources) {
  return resources.map((r) => {
    const issues = [];

    if (!r.encryption) issues.push("Encryption disabled");
    if (r.publicAccess) issues.push("Public access enabled");

    return {
      resource: r.id,
      compliant: issues.length === 0,
      issues,
    };
  });
}

console.log(scan(resources));
