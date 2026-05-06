module.exports = {
  mySidebar: [
    'index',
    {
      type: 'category',
      label: 'OpCon RPA',
      collapsed: true,
      items: [
      'system-requirements-opcon-rpa',
      'acquiring-a-license-opcon-rpa',
      'installation-opcon-rpa',
      'install-cloud-vpn',
      'update-opcon-rpa',
      'orchestration-with-opcon-opcon-rpa',
      'mapping-opcon-properties',
      'import-export-tasks-opcon-rpa',
      'troubleshooting-opcon-rpa',
      'changelog-opcon-rpa',
      {
        type: 'category',
        label: 'Robot Task',
        link: {type: 'doc', id: 'robot-task-rpa'},
        items: [
          'rpa-security-settings',
        ],
      },
      ],
    },
    {
      type: 'category',
      label: 'VisualCron RPA',
      collapsed: true,
      items: [
      'visualcron-rpa',
      'system-requirements-visualcron-rpa',
      'acquiring-a-license-visualcron-rpa',
      'installation-visualcron-rpa',
      'overview-visualcron-rpa',
      'navigation-visualcron-rpa',
      'orchestration-with-opcon-visualcron-rpa',
      'rpa-job-config-with-visualcron',
      'reporting-and-metrics-visualcron-rpa',
      'troubleshooting-visualcron-rpa',
      ],
    }, 
  ],
};
