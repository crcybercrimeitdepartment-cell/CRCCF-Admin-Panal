/**
 * Master Search Data Catalog for CRCCF Intelligence Platform & Admin Panel
 * Comprehensive index covering all top-level controls, 16 management controls,
 * all 20 galleries (and their photo actions), 24 verification services, 30 application
 * forms, courses, training programs, victim support, and sub-pages across every corner of the platform.
 *
 * Generated Total Indexed Entries: 886
 */

export const SEARCH_CATEGORIES = [
  "All",
  "Galleries",
  "Management Controls",
  "Verification Services",
  "Online Applications",
  "Courses & Training",
  "System & Security",
  "Cyber Crime & Support"
];

export const SEARCH_DATABASE = [
  {
    "id": "super-admin-control",
    "title": "Super Admin Control",
    "category": "System & Security",
    "parent": "Primary Administrative Controls",
    "hierarchy": [
      "Admin Portal",
      "Super Admin Control"
    ],
    "description": "Executive officer credentials, permissions, audit trail logs, security enforcement, and system configuration.",
    "keywords": [
      "super admin",
      "officer",
      "credentials",
      "root",
      "administrator",
      "privilege",
      "executive",
      "director",
      "super",
      "admin",
      "control",
      "primary administrative controls"
    ],
    "target": {
      "scope": "app",
      "view": "SuperAdminControl"
    },
    "iconName": "Shield",
    "badge": "Control",
    "theme": "blue"
  },
  {
    "title": "Super Admin Profile",
    "category": "System & Security",
    "parent": "Super Admin Control",
    "hierarchy": [
      "Admin Portal",
      "Super Admin Control",
      "Super Admin Profile"
    ],
    "description": "Manage executive officer credentials, contact records, personal verification, and official bio.",
    "keywords": [
      "officer name",
      "rajesh kumar",
      "designation",
      "department",
      "emp id",
      "badge",
      "director",
      "super",
      "admin",
      "profile",
      "super admin control",
      "sub-page"
    ],
    "target": {
      "scope": "app",
      "view": "SuperAdminControl"
    },
    "iconName": "UserCheck",
    "badge": "Sub-Page",
    "theme": "blue",
    "id": "super-admin-profile"
  },
  {
    "title": "Super Admin Account",
    "category": "System & Security",
    "parent": "Super Admin Control",
    "hierarchy": [
      "Admin Portal",
      "Super Admin Control",
      "Super Admin Account"
    ],
    "description": "Configure administrator email, system username, billing tier, and account preferences.",
    "keywords": [
      "email",
      "username",
      "billing",
      "preferences",
      "admin account",
      "super",
      "admin",
      "account",
      "super admin control",
      "sub-page"
    ],
    "target": {
      "scope": "app",
      "view": "SuperAdminControl"
    },
    "iconName": "Settings",
    "badge": "Sub-Page",
    "theme": "indigo",
    "id": "super-admin-account"
  },
  {
    "title": "Super Admin Activity",
    "category": "System & Security",
    "parent": "Super Admin Control",
    "hierarchy": [
      "Admin Portal",
      "Super Admin Control",
      "Super Admin Activity"
    ],
    "description": "Audit trail logs, configuration change history, command execution timestamps, and traces.",
    "keywords": [
      "audit",
      "logs",
      "history",
      "timestamps",
      "traces",
      "activity log",
      "super",
      "admin",
      "activity",
      "super admin control",
      "sub-page"
    ],
    "target": {
      "scope": "app",
      "view": "SuperAdminControl"
    },
    "iconName": "History",
    "badge": "Sub-Page",
    "theme": "cyan",
    "id": "super-admin-activity"
  },
  {
    "title": "Super Admin Security",
    "category": "System & Security",
    "parent": "Super Admin Control",
    "hierarchy": [
      "Admin Portal",
      "Super Admin Control",
      "Super Admin Security"
    ],
    "description": "Multi-factor authentication (MFA), cryptographic keys, password rotation, and SSL rules.",
    "keywords": [
      "mfa",
      "two factor",
      "encryption",
      "cryptographic",
      "ssl",
      "password rotation",
      "keys",
      "super",
      "admin",
      "security",
      "super admin control",
      "sub-page"
    ],
    "target": {
      "scope": "app",
      "view": "SuperAdminControl"
    },
    "iconName": "ShieldCheck",
    "badge": "Sub-Page",
    "theme": "emerald",
    "id": "super-admin-security"
  },
  {
    "title": "Sub Admin Access Control",
    "category": "System & Security",
    "parent": "Super Admin Control",
    "hierarchy": [
      "Admin Portal",
      "Super Admin Control",
      "Sub Admin Access Control"
    ],
    "description": "Assign regional sub-admin permissions, departmental privilege roles, and scoping rules.",
    "keywords": [
      "sub admin",
      "permissions",
      "roles",
      "regional",
      "access control",
      "sub",
      "admin",
      "access",
      "control",
      "super admin control",
      "sub-page"
    ],
    "target": {
      "scope": "app",
      "view": "SuperAdminControl"
    },
    "iconName": "Shield",
    "badge": "Sub-Page",
    "theme": "violet",
    "id": "sub-admin-access-control"
  },
  {
    "title": "User Management Control",
    "category": "System & Security",
    "parent": "Super Admin Control",
    "hierarchy": [
      "Admin Portal",
      "Super Admin Control",
      "User Management Control"
    ],
    "description": "Manage citizen accounts, police officer accounts, KYC approvals, and active credentials.",
    "keywords": [
      "citizen",
      "police accounts",
      "kyc",
      "credentials",
      "user management",
      "user",
      "management",
      "control",
      "super admin control",
      "sub-page"
    ],
    "target": {
      "scope": "app",
      "view": "SuperAdminControl"
    },
    "iconName": "Users",
    "badge": "Sub-Page",
    "theme": "rose",
    "id": "user-management-control"
  },
  {
    "title": "System Access Control",
    "category": "System & Security",
    "parent": "Super Admin Control",
    "hierarchy": [
      "Admin Portal",
      "Super Admin Control",
      "System Access Control"
    ],
    "description": "IP address whitelisting, firewall rules, server gateway access, and API token controls.",
    "keywords": [
      "ip whitelist",
      "firewall",
      "gateway",
      "api tokens",
      "system access",
      "system",
      "access",
      "control",
      "super admin control",
      "sub-page"
    ],
    "target": {
      "scope": "app",
      "view": "SuperAdminControl"
    },
    "iconName": "Key",
    "badge": "Sub-Page",
    "theme": "amber",
    "id": "system-access-control"
  },
  {
    "title": "Super Admin Active Sessions",
    "category": "System & Security",
    "parent": "Super Admin Control",
    "hierarchy": [
      "Admin Portal",
      "Super Admin Control",
      "Super Admin Active Sessions"
    ],
    "description": "Live concurrent login sessions, device fingerprints, geo-location tracking, and instant revoke.",
    "keywords": [
      "active sessions",
      "live logins",
      "device fingerprint",
      "geo location",
      "revoke",
      "super",
      "admin",
      "active",
      "sessions",
      "super admin control",
      "sub-page"
    ],
    "target": {
      "scope": "app",
      "view": "SuperAdminControl"
    },
    "iconName": "Activity",
    "badge": "Sub-Page",
    "theme": "emerald",
    "id": "super-admin-active-sessions"
  },
  {
    "id": "mail-control",
    "title": "Mail Control Center",
    "category": "System & Security",
    "parent": "Primary Administrative Controls",
    "hierarchy": [
      "Admin Portal",
      "Mail Control Center"
    ],
    "description": "Manage institutional mailboxes, SMTP/IMAP servers, email dispatch rules, security filters, and audit queues.",
    "keywords": [
      "mail",
      "email",
      "inbox",
      "smtp",
      "imap",
      "mailbox",
      "dispatch",
      "outbox",
      "control",
      "center",
      "primary administrative controls"
    ],
    "target": {
      "scope": "app",
      "view": "MailControl"
    },
    "iconName": "Mail",
    "badge": "Control",
    "theme": "indigo"
  },
  {
    "title": "Email Account Profile",
    "category": "System & Security",
    "parent": "Mail Control Center",
    "hierarchy": [
      "Admin Portal",
      "Mail Control",
      "Email Account Profile"
    ],
    "description": "Manage your official cybercrime cell email profile, signatures, and personal credentials.",
    "keywords": [
      "signature",
      "credentials",
      "avatar",
      "email",
      "account",
      "profile",
      "mail control center",
      "mail feature"
    ],
    "target": {
      "scope": "app",
      "view": "MailControl"
    },
    "iconName": "User",
    "badge": "Mail Feature",
    "theme": "blue",
    "id": "email-account-profile"
  },
  {
    "title": "Email Account Settings",
    "category": "System & Security",
    "parent": "Mail Control Center",
    "hierarchy": [
      "Admin Portal",
      "Mail Control",
      "Email Account Settings"
    ],
    "description": "Configure email privacy, encryption certificates, registered numbers, and access authorizations.",
    "keywords": [
      "privacy",
      "encryption",
      "certificates",
      "email",
      "account",
      "settings",
      "mail control center",
      "mail feature"
    ],
    "target": {
      "scope": "app",
      "view": "MailControl"
    },
    "iconName": "Shield",
    "badge": "Mail Feature",
    "theme": "emerald",
    "id": "email-account-settings"
  },
  {
    "title": "Email Account Controls",
    "category": "System & Security",
    "parent": "Mail Control Center",
    "hierarchy": [
      "Admin Portal",
      "Mail Control",
      "Email Account Controls"
    ],
    "description": "Control email account lifecycle, active status, storage buckets, and quota allocations.",
    "keywords": [
      "lifecycle",
      "storage",
      "quota",
      "limits",
      "email",
      "account",
      "controls",
      "mail control center",
      "mail feature"
    ],
    "target": {
      "scope": "app",
      "view": "MailControl"
    },
    "iconName": "Settings",
    "badge": "Mail Feature",
    "theme": "indigo",
    "id": "email-account-controls"
  },
  {
    "title": "Email Sending Controls",
    "category": "System & Security",
    "parent": "Mail Control Center",
    "hierarchy": [
      "Admin Portal",
      "Mail Control",
      "Email Sending Controls"
    ],
    "description": "Manage composing, outbox queues, scheduled mailings, and anti-spam filter rules.",
    "keywords": [
      "sending",
      "outbox",
      "scheduled",
      "anti-spam",
      "inbox",
      "email",
      "controls",
      "mail control center",
      "mail feature"
    ],
    "target": {
      "scope": "app",
      "view": "MailControl"
    },
    "iconName": "Send",
    "badge": "Mail Feature",
    "theme": "violet",
    "id": "email-sending-controls"
  },
  {
    "title": "Email Privacy Settings",
    "category": "System & Security",
    "parent": "Mail Control Center",
    "hierarchy": [
      "Admin Portal",
      "Mail Control",
      "Email Privacy Settings"
    ],
    "description": "Manage read receipts, IP header masking, and external exposure filters.",
    "keywords": [
      "read receipts",
      "tracking",
      "ip mask",
      "email",
      "privacy",
      "settings",
      "mail control center",
      "mail feature"
    ],
    "target": {
      "scope": "app",
      "view": "MailControl"
    },
    "iconName": "EyeOff",
    "badge": "Mail Feature",
    "theme": "blue",
    "id": "email-privacy-settings"
  },
  {
    "title": "Email Security Settings",
    "category": "System & Security",
    "parent": "Mail Control Center",
    "hierarchy": [
      "Admin Portal",
      "Mail Control",
      "Email Security Settings"
    ],
    "description": "Configure S/MIME encryption, PGP signatures, and cryptographic transport standards.",
    "keywords": [
      "smime",
      "pgp",
      "transport encryption",
      "email",
      "security",
      "settings",
      "mail control center",
      "mail feature"
    ],
    "target": {
      "scope": "app",
      "view": "MailControl"
    },
    "iconName": "Lock",
    "badge": "Mail Feature",
    "theme": "emerald",
    "id": "email-security-settings"
  },
  {
    "title": "Email Registered Phone Number",
    "category": "System & Security",
    "parent": "Mail Control Center",
    "hierarchy": [
      "Admin Portal",
      "Mail Control",
      "Email Registered Phone Number"
    ],
    "description": "Verify and update multi-factor SMS recovery phone numbers for email.",
    "keywords": [
      "recovery phone",
      "sms line",
      "2fa phone",
      "email",
      "registered",
      "phone",
      "number",
      "mail control center",
      "mail feature"
    ],
    "target": {
      "scope": "app",
      "view": "MailControl"
    },
    "iconName": "Smartphone",
    "badge": "Mail Feature",
    "theme": "amber",
    "id": "email-registered-phone-number"
  },
  {
    "title": "Email Sign-in Activity",
    "category": "System & Security",
    "parent": "Mail Control Center",
    "hierarchy": [
      "Admin Portal",
      "Mail Control",
      "Email Sign-in Activity"
    ],
    "description": "Audit email access timestamps, client device user agents, and IP locations.",
    "keywords": [
      "webmail audit",
      "client ips",
      "session history",
      "email",
      "sign",
      "activity",
      "mail control center",
      "mail feature"
    ],
    "target": {
      "scope": "app",
      "view": "MailControl"
    },
    "iconName": "History",
    "badge": "Mail Feature",
    "theme": "indigo",
    "id": "email-sign-in-activity"
  },
  {
    "title": "Email Storage Status",
    "category": "System & Security",
    "parent": "Mail Control Center",
    "hierarchy": [
      "Admin Portal",
      "Mail Control",
      "Email Storage Status"
    ],
    "description": "Inspect inbox storage capacity, archive buckets, and quota warnings.",
    "keywords": [
      "capacity",
      "archival",
      "quota warning",
      "email",
      "storage",
      "status",
      "mail control center",
      "mail feature"
    ],
    "target": {
      "scope": "app",
      "view": "MailControl"
    },
    "iconName": "Database",
    "badge": "Mail Feature",
    "theme": "emerald",
    "id": "email-storage-status"
  },
  {
    "title": "Inbox Management",
    "category": "System & Security",
    "parent": "Mail Control Center",
    "hierarchy": [
      "Admin Portal",
      "Mail Control",
      "Inbox Management"
    ],
    "description": "Organize high-priority law enforcement communications, citizen replies, and labels.",
    "keywords": [
      "priority inbox",
      "tags",
      "labels",
      "inbox",
      "management",
      "mail control center",
      "mail feature"
    ],
    "target": {
      "scope": "app",
      "view": "MailControl"
    },
    "iconName": "Inbox",
    "badge": "Mail Feature",
    "theme": "blue",
    "id": "inbox-management"
  },
  {
    "title": "Scheduled Mails",
    "category": "System & Security",
    "parent": "Mail Control Center",
    "hierarchy": [
      "Admin Portal",
      "Mail Control",
      "Scheduled Mails"
    ],
    "description": "Manage automated advisory releases, timed case reminders, and scheduled broadcasts.",
    "keywords": [
      "timed mail",
      "scheduled dispatch",
      "broadcast",
      "scheduled",
      "mails",
      "mail control center",
      "mail feature"
    ],
    "target": {
      "scope": "app",
      "view": "MailControl"
    },
    "iconName": "Calendar",
    "badge": "Mail Feature",
    "theme": "cyan",
    "id": "scheduled-mails"
  },
  {
    "title": "Email Filters & Rules",
    "category": "System & Security",
    "parent": "Mail Control Center",
    "hierarchy": [
      "Admin Portal",
      "Mail Control",
      "Email Filters & Rules"
    ],
    "description": "Establish rule-based forwarding, threat email auto-quarantine, and spam shields.",
    "keywords": [
      "filters",
      "auto-quarantine",
      "spam shield",
      "forwarding",
      "email",
      "rules",
      "mail control center",
      "mail feature"
    ],
    "target": {
      "scope": "app",
      "view": "MailControl"
    },
    "iconName": "Filter",
    "badge": "Mail Feature",
    "theme": "violet",
    "id": "email-filters-rules"
  },
  {
    "id": "software-control",
    "title": "Software Control Center",
    "category": "System & Security",
    "parent": "Primary Administrative Controls",
    "hierarchy": [
      "Admin Portal",
      "Software Control Center"
    ],
    "description": "Manage system configurations, monitor service health, deploy defense updates, and regulate application software settings.",
    "keywords": [
      "software",
      "patches",
      "deploy",
      "system health",
      "servers",
      "tools",
      "releases",
      "builds",
      "control",
      "center",
      "primary administrative controls"
    ],
    "target": {
      "scope": "app",
      "view": "SoftwareControl"
    },
    "iconName": "Cpu",
    "badge": "Control",
    "theme": "amber"
  },
  {
    "title": "Software Module 1",
    "category": "System & Security",
    "parent": "Software Control Center",
    "hierarchy": [
      "Admin Portal",
      "Software Control",
      "Software Module 1"
    ],
    "description": "Manage and configure core software build parameters, API endpoints, and enterprise module 1.",
    "keywords": [
      "module 1",
      "software 1",
      "build",
      "version",
      "api endpoint",
      "software",
      "module",
      "software control center"
    ],
    "target": {
      "scope": "app",
      "view": "SoftwareControl"
    },
    "iconName": "Server",
    "badge": "Module",
    "theme": "indigo",
    "id": "software-module-1"
  },
  {
    "title": "Software Module 2",
    "category": "System & Security",
    "parent": "Software Control Center",
    "hierarchy": [
      "Admin Portal",
      "Software Control",
      "Software Module 2"
    ],
    "description": "Manage and configure core software build parameters, API endpoints, and enterprise module 2.",
    "keywords": [
      "module 2",
      "software 2",
      "build",
      "version",
      "api endpoint",
      "software",
      "module",
      "software control center"
    ],
    "target": {
      "scope": "app",
      "view": "SoftwareControl"
    },
    "iconName": "Server",
    "badge": "Module",
    "theme": "emerald",
    "id": "software-module-2"
  },
  {
    "title": "Software Module 3",
    "category": "System & Security",
    "parent": "Software Control Center",
    "hierarchy": [
      "Admin Portal",
      "Software Control",
      "Software Module 3"
    ],
    "description": "Manage and configure core software build parameters, API endpoints, and enterprise module 3.",
    "keywords": [
      "module 3",
      "software 3",
      "build",
      "version",
      "api endpoint",
      "software",
      "module",
      "software control center"
    ],
    "target": {
      "scope": "app",
      "view": "SoftwareControl"
    },
    "iconName": "Server",
    "badge": "Module",
    "theme": "violet",
    "id": "software-module-3"
  },
  {
    "title": "Software Module 4",
    "category": "System & Security",
    "parent": "Software Control Center",
    "hierarchy": [
      "Admin Portal",
      "Software Control",
      "Software Module 4"
    ],
    "description": "Manage and configure core software build parameters, API endpoints, and enterprise module 4.",
    "keywords": [
      "module 4",
      "software 4",
      "build",
      "version",
      "api endpoint",
      "software",
      "module",
      "software control center"
    ],
    "target": {
      "scope": "app",
      "view": "SoftwareControl"
    },
    "iconName": "Server",
    "badge": "Module",
    "theme": "rose",
    "id": "software-module-4"
  },
  {
    "title": "Software Module 5",
    "category": "System & Security",
    "parent": "Software Control Center",
    "hierarchy": [
      "Admin Portal",
      "Software Control",
      "Software Module 5"
    ],
    "description": "Manage and configure core software build parameters, API endpoints, and enterprise module 5.",
    "keywords": [
      "module 5",
      "software 5",
      "build",
      "version",
      "api endpoint",
      "software",
      "module",
      "software control center"
    ],
    "target": {
      "scope": "app",
      "view": "SoftwareControl"
    },
    "iconName": "Server",
    "badge": "Module",
    "theme": "amber",
    "id": "software-module-5"
  },
  {
    "title": "Software Module 6",
    "category": "System & Security",
    "parent": "Software Control Center",
    "hierarchy": [
      "Admin Portal",
      "Software Control",
      "Software Module 6"
    ],
    "description": "Manage and configure core software build parameters, API endpoints, and enterprise module 6.",
    "keywords": [
      "module 6",
      "software 6",
      "build",
      "version",
      "api endpoint",
      "software",
      "module",
      "software control center"
    ],
    "target": {
      "scope": "app",
      "view": "SoftwareControl"
    },
    "iconName": "Server",
    "badge": "Module",
    "theme": "cyan",
    "id": "software-module-6"
  },
  {
    "title": "Software Module 7",
    "category": "System & Security",
    "parent": "Software Control Center",
    "hierarchy": [
      "Admin Portal",
      "Software Control",
      "Software Module 7"
    ],
    "description": "Manage and configure core software build parameters, API endpoints, and enterprise module 7.",
    "keywords": [
      "module 7",
      "software 7",
      "build",
      "version",
      "api endpoint",
      "software",
      "module",
      "software control center"
    ],
    "target": {
      "scope": "app",
      "view": "SoftwareControl"
    },
    "iconName": "Server",
    "badge": "Module",
    "theme": "blue",
    "id": "software-module-7"
  },
  {
    "title": "Software Module 8",
    "category": "System & Security",
    "parent": "Software Control Center",
    "hierarchy": [
      "Admin Portal",
      "Software Control",
      "Software Module 8"
    ],
    "description": "Manage and configure core software build parameters, API endpoints, and enterprise module 8.",
    "keywords": [
      "module 8",
      "software 8",
      "build",
      "version",
      "api endpoint",
      "software",
      "module",
      "software control center"
    ],
    "target": {
      "scope": "app",
      "view": "SoftwareControl"
    },
    "iconName": "Server",
    "badge": "Module",
    "theme": "indigo",
    "id": "software-module-8"
  },
  {
    "title": "Software Module 9",
    "category": "System & Security",
    "parent": "Software Control Center",
    "hierarchy": [
      "Admin Portal",
      "Software Control",
      "Software Module 9"
    ],
    "description": "Manage and configure core software build parameters, API endpoints, and enterprise module 9.",
    "keywords": [
      "module 9",
      "software 9",
      "build",
      "version",
      "api endpoint",
      "software",
      "module",
      "software control center"
    ],
    "target": {
      "scope": "app",
      "view": "SoftwareControl"
    },
    "iconName": "Server",
    "badge": "Module",
    "theme": "emerald",
    "id": "software-module-9"
  },
  {
    "title": "Software Module 10",
    "category": "System & Security",
    "parent": "Software Control Center",
    "hierarchy": [
      "Admin Portal",
      "Software Control",
      "Software Module 10"
    ],
    "description": "Manage and configure core software build parameters, API endpoints, and enterprise module 10.",
    "keywords": [
      "module 10",
      "software 10",
      "build",
      "version",
      "api endpoint",
      "software",
      "module",
      "software control center"
    ],
    "target": {
      "scope": "app",
      "view": "SoftwareControl"
    },
    "iconName": "Server",
    "badge": "Module",
    "theme": "violet",
    "id": "software-module-10"
  },
  {
    "title": "Software Module 11",
    "category": "System & Security",
    "parent": "Software Control Center",
    "hierarchy": [
      "Admin Portal",
      "Software Control",
      "Software Module 11"
    ],
    "description": "Manage and configure core software build parameters, API endpoints, and enterprise module 11.",
    "keywords": [
      "module 11",
      "software 11",
      "build",
      "version",
      "api endpoint",
      "software",
      "module",
      "software control center"
    ],
    "target": {
      "scope": "app",
      "view": "SoftwareControl"
    },
    "iconName": "Server",
    "badge": "Module",
    "theme": "rose",
    "id": "software-module-11"
  },
  {
    "title": "Software Module 12",
    "category": "System & Security",
    "parent": "Software Control Center",
    "hierarchy": [
      "Admin Portal",
      "Software Control",
      "Software Module 12"
    ],
    "description": "Manage and configure core software build parameters, API endpoints, and enterprise module 12.",
    "keywords": [
      "module 12",
      "software 12",
      "build",
      "version",
      "api endpoint",
      "software",
      "module",
      "software control center"
    ],
    "target": {
      "scope": "app",
      "view": "SoftwareControl"
    },
    "iconName": "Server",
    "badge": "Module",
    "theme": "amber",
    "id": "software-module-12"
  },
  {
    "id": "user-control",
    "title": "User Control Center",
    "category": "System & Security",
    "parent": "Primary Administrative Controls",
    "hierarchy": [
      "Admin Portal",
      "User Control Center"
    ],
    "description": "Comprehensively manage user accounts, RBAC roles, officer privileges, biometric authentication, and bulk operations.",
    "keywords": [
      "user control",
      "officers",
      "citizens",
      "accounts",
      "directory",
      "roles",
      "credentials",
      "rbac",
      "user",
      "control",
      "center",
      "primary administrative controls"
    ],
    "target": {
      "scope": "app",
      "view": "UserControl"
    },
    "iconName": "Users",
    "badge": "Control",
    "theme": "violet"
  },
  {
    "title": "User Account & Profile",
    "category": "System & Security",
    "parent": "User Control Center",
    "hierarchy": [
      "Admin Portal",
      "User Control",
      "User Account & Profile"
    ],
    "description": "Manage fundamental user information, officer badges, and profiles.",
    "keywords": [
      "users",
      "officers",
      "credentials",
      "rbac",
      "security",
      "user",
      "account",
      "profile",
      "user control center",
      "user desk"
    ],
    "target": {
      "scope": "app",
      "view": "UserControl"
    },
    "iconName": "User",
    "badge": "User Desk",
    "theme": "blue",
    "id": "user-account-profile"
  },
  {
    "title": "User Roles & Access Permissions",
    "category": "System & Security",
    "parent": "User Control Center",
    "hierarchy": [
      "Admin Portal",
      "User Control",
      "User Roles & Access Permissions"
    ],
    "description": "Assign roles and configure fine-grained permissions and departmental access.",
    "keywords": [
      "users",
      "officers",
      "credentials",
      "rbac",
      "security",
      "user",
      "roles",
      "access",
      "permissions",
      "user control center",
      "user desk"
    ],
    "target": {
      "scope": "app",
      "view": "UserControl"
    },
    "iconName": "Shield",
    "badge": "User Desk",
    "theme": "indigo",
    "id": "user-roles-access-permissions"
  },
  {
    "title": "User Settings",
    "category": "System & Security",
    "parent": "User Control Center",
    "hierarchy": [
      "Admin Portal",
      "User Control",
      "User Settings"
    ],
    "description": "Manage generic settings for user preferences and default workspaces.",
    "keywords": [
      "users",
      "officers",
      "credentials",
      "rbac",
      "security",
      "user",
      "settings",
      "user control center",
      "user desk"
    ],
    "target": {
      "scope": "app",
      "view": "UserControl"
    },
    "iconName": "Settings",
    "badge": "User Desk",
    "theme": "emerald",
    "id": "user-settings"
  },
  {
    "title": "User Activity & Audit Log",
    "category": "System & Security",
    "parent": "User Control Center",
    "hierarchy": [
      "Admin Portal",
      "User Control",
      "User Activity & Audit Log"
    ],
    "description": "Track user behaviors, access logs, and administrative actions.",
    "keywords": [
      "users",
      "officers",
      "credentials",
      "rbac",
      "security",
      "user",
      "activity",
      "audit",
      "log",
      "user control center",
      "user desk"
    ],
    "target": {
      "scope": "app",
      "view": "UserControl"
    },
    "iconName": "History",
    "badge": "User Desk",
    "theme": "violet",
    "id": "user-activity-audit-log"
  },
  {
    "title": "User Verification",
    "category": "System & Security",
    "parent": "User Control Center",
    "hierarchy": [
      "Admin Portal",
      "User Control",
      "User Verification"
    ],
    "description": "Handle citizen identity verification, government ID approval, and KYC records.",
    "keywords": [
      "users",
      "officers",
      "credentials",
      "rbac",
      "security",
      "user",
      "verification",
      "user control center",
      "user desk"
    ],
    "target": {
      "scope": "app",
      "view": "UserControl"
    },
    "iconName": "CheckCircle",
    "badge": "User Desk",
    "theme": "rose",
    "id": "user-verification"
  },
  {
    "title": "User Sessions",
    "category": "System & Security",
    "parent": "User Control Center",
    "hierarchy": [
      "Admin Portal",
      "User Control",
      "User Sessions"
    ],
    "description": "Monitor and terminate active user sessions and concurrent connections.",
    "keywords": [
      "users",
      "officers",
      "credentials",
      "rbac",
      "security",
      "user",
      "sessions",
      "user control center",
      "user desk"
    ],
    "target": {
      "scope": "app",
      "view": "UserControl"
    },
    "iconName": "Activity",
    "badge": "User Desk",
    "theme": "amber",
    "id": "user-sessions"
  },
  {
    "title": "Login & Security",
    "category": "System & Security",
    "parent": "User Control Center",
    "hierarchy": [
      "Admin Portal",
      "User Control",
      "Login & Security"
    ],
    "description": "Manage login methods, password criteria, and security protocols.",
    "keywords": [
      "users",
      "officers",
      "credentials",
      "rbac",
      "security",
      "login",
      "user control center",
      "user desk"
    ],
    "target": {
      "scope": "app",
      "view": "UserControl"
    },
    "iconName": "Lock",
    "badge": "User Desk",
    "theme": "cyan",
    "id": "login-security"
  },
  {
    "title": "Restricted & Inactive Users",
    "category": "System & Security",
    "parent": "User Control Center",
    "hierarchy": [
      "Admin Portal",
      "User Control",
      "Restricted & Inactive Users"
    ],
    "description": "View and manage suspended, restricted, or inactive accounts.",
    "keywords": [
      "users",
      "officers",
      "credentials",
      "rbac",
      "security",
      "restricted",
      "inactive",
      "user control center",
      "user desk"
    ],
    "target": {
      "scope": "app",
      "view": "UserControl"
    },
    "iconName": "XCircle",
    "badge": "User Desk",
    "theme": "blue",
    "id": "restricted-inactive-users"
  },
  {
    "title": "User Groups & Teams",
    "category": "System & Security",
    "parent": "User Control Center",
    "hierarchy": [
      "Admin Portal",
      "User Control",
      "User Groups & Teams"
    ],
    "description": "Group users into functional forensic units, teams, and departments.",
    "keywords": [
      "users",
      "officers",
      "credentials",
      "rbac",
      "security",
      "user",
      "groups",
      "teams",
      "user control center",
      "user desk"
    ],
    "target": {
      "scope": "app",
      "view": "UserControl"
    },
    "iconName": "Users",
    "badge": "User Desk",
    "theme": "indigo",
    "id": "user-groups-teams"
  },
  {
    "title": "User Directory",
    "category": "System & Security",
    "parent": "User Control Center",
    "hierarchy": [
      "Admin Portal",
      "User Control",
      "User Directory"
    ],
    "description": "Browse and search through the global user list, officers, and registry.",
    "keywords": [
      "users",
      "officers",
      "credentials",
      "rbac",
      "security",
      "user",
      "directory",
      "user control center",
      "user desk"
    ],
    "target": {
      "scope": "app",
      "view": "UserControl"
    },
    "iconName": "BookOpen",
    "badge": "User Desk",
    "theme": "violet",
    "id": "user-directory"
  },
  {
    "title": "User Registration",
    "category": "System & Security",
    "parent": "User Control Center",
    "hierarchy": [
      "Admin Portal",
      "User Control",
      "User Registration"
    ],
    "description": "Manage new signups, pending onboarding forms, and approvals.",
    "keywords": [
      "users",
      "officers",
      "credentials",
      "rbac",
      "security",
      "user",
      "registration",
      "user control center",
      "user desk"
    ],
    "target": {
      "scope": "app",
      "view": "UserControl"
    },
    "iconName": "UserPlus",
    "badge": "User Desk",
    "theme": "rose",
    "id": "user-registration"
  },
  {
    "title": "User Department Management",
    "category": "System & Security",
    "parent": "User Control Center",
    "hierarchy": [
      "Admin Portal",
      "User Control",
      "User Department Management"
    ],
    "description": "Map and manage cybercrime departments and regional branches.",
    "keywords": [
      "users",
      "officers",
      "credentials",
      "rbac",
      "security",
      "user",
      "department",
      "management",
      "user control center",
      "user desk"
    ],
    "target": {
      "scope": "app",
      "view": "UserControl"
    },
    "iconName": "Briefcase",
    "badge": "User Desk",
    "theme": "indigo",
    "id": "user-department-management"
  },
  {
    "title": "User Designation Management",
    "category": "System & Security",
    "parent": "User Control Center",
    "hierarchy": [
      "Admin Portal",
      "User Control",
      "User Designation Management"
    ],
    "description": "Configure job titles, inspector designations, and hierarchical ranks.",
    "keywords": [
      "users",
      "officers",
      "credentials",
      "rbac",
      "security",
      "user",
      "designation",
      "management",
      "user control center",
      "user desk"
    ],
    "target": {
      "scope": "app",
      "view": "UserControl"
    },
    "iconName": "Award",
    "badge": "User Desk",
    "theme": "emerald",
    "id": "user-designation-management"
  },
  {
    "title": "User Device Management",
    "category": "System & Security",
    "parent": "User Control Center",
    "hierarchy": [
      "Admin Portal",
      "User Control",
      "User Device Management"
    ],
    "description": "Track hardware devices, trusted laptops, and mobile units linked to user accounts.",
    "keywords": [
      "users",
      "officers",
      "credentials",
      "rbac",
      "security",
      "user",
      "device",
      "management",
      "user control center",
      "user desk"
    ],
    "target": {
      "scope": "app",
      "view": "UserControl"
    },
    "iconName": "Smartphone",
    "badge": "User Desk",
    "theme": "cyan",
    "id": "user-device-management"
  },
  {
    "title": "Trusted Devices",
    "category": "System & Security",
    "parent": "User Control Center",
    "hierarchy": [
      "Admin Portal",
      "User Control",
      "Trusted Devices"
    ],
    "description": "Manage and authorize hardware fingerprints for secure single-sign-on access.",
    "keywords": [
      "users",
      "officers",
      "credentials",
      "rbac",
      "security",
      "trusted",
      "devices",
      "user control center",
      "user desk"
    ],
    "target": {
      "scope": "app",
      "view": "UserControl"
    },
    "iconName": "ShieldCheck",
    "badge": "User Desk",
    "theme": "blue",
    "id": "trusted-devices"
  },
  {
    "title": "User Password Management",
    "category": "System & Security",
    "parent": "User Control Center",
    "hierarchy": [
      "Admin Portal",
      "User Control",
      "User Password Management"
    ],
    "description": "Enforce password complexity policies, expirations, and rotations.",
    "keywords": [
      "users",
      "officers",
      "credentials",
      "rbac",
      "security",
      "user",
      "password",
      "management",
      "user control center",
      "user desk"
    ],
    "target": {
      "scope": "app",
      "view": "UserControl"
    },
    "iconName": "Key",
    "badge": "User Desk",
    "theme": "indigo",
    "id": "user-password-management"
  },
  {
    "title": "User Authentication & MFA",
    "category": "System & Security",
    "parent": "User Control Center",
    "hierarchy": [
      "Admin Portal",
      "User Control",
      "User Authentication & MFA"
    ],
    "description": "Configure MFA, TOTP apps, hardware security tokens, and biometrics.",
    "keywords": [
      "users",
      "officers",
      "credentials",
      "rbac",
      "security",
      "user",
      "authentication",
      "mfa",
      "user control center",
      "user desk"
    ],
    "target": {
      "scope": "app",
      "view": "UserControl"
    },
    "iconName": "Fingerprint",
    "badge": "User Desk",
    "theme": "rose",
    "id": "user-authentication-mfa"
  },
  {
    "title": "User Lockout Management",
    "category": "System & Security",
    "parent": "User Control Center",
    "hierarchy": [
      "Admin Portal",
      "User Control",
      "User Lockout Management"
    ],
    "description": "Unlock accounts suspended due to excessive failed password attempts.",
    "keywords": [
      "users",
      "officers",
      "credentials",
      "rbac",
      "security",
      "user",
      "lockout",
      "management",
      "user control center",
      "user desk"
    ],
    "target": {
      "scope": "app",
      "view": "UserControl"
    },
    "iconName": "XOctagon",
    "badge": "User Desk",
    "theme": "cyan",
    "id": "user-lockout-management"
  },
  {
    "title": "Bulk User Management",
    "category": "System & Security",
    "parent": "User Control Center",
    "hierarchy": [
      "Admin Portal",
      "User Control",
      "Bulk User Management"
    ],
    "description": "Apply mass changes, bulk role assignments, and batch updates to user accounts.",
    "keywords": [
      "users",
      "officers",
      "credentials",
      "rbac",
      "security",
      "bulk",
      "user",
      "management",
      "user control center",
      "user desk"
    ],
    "target": {
      "scope": "app",
      "view": "UserControl"
    },
    "iconName": "Layers",
    "badge": "User Desk",
    "theme": "amber",
    "id": "bulk-user-management"
  },
  {
    "title": "User Reports & Analytics",
    "category": "System & Security",
    "parent": "User Control Center",
    "hierarchy": [
      "Admin Portal",
      "User Control",
      "User Reports & Analytics"
    ],
    "description": "Generate insights and downloadable reports from user behavior metrics.",
    "keywords": [
      "users",
      "officers",
      "credentials",
      "rbac",
      "security",
      "user",
      "reports",
      "analytics",
      "user control center",
      "user desk"
    ],
    "target": {
      "scope": "app",
      "view": "UserControl"
    },
    "iconName": "BarChart",
    "badge": "User Desk",
    "theme": "cyan",
    "id": "user-reports-analytics"
  },
  {
    "id": "dashboard-control",
    "title": "Dashboard Control Center",
    "category": "System & Security",
    "parent": "Primary Administrative Controls",
    "hierarchy": [
      "Admin Portal",
      "Dashboard Control Center"
    ],
    "description": "Customize workspace themes, configure system languages, accessibility settings, and personal preference parameters.",
    "keywords": [
      "dashboard",
      "theme",
      "settings",
      "accessibility",
      "language",
      "preferences",
      "voice assistant",
      "dark mode",
      "control",
      "center",
      "primary administrative controls"
    ],
    "target": {
      "scope": "app",
      "view": "DashboardControl"
    },
    "iconName": "LayoutDashboard",
    "badge": "Control",
    "theme": "blue"
  },
  {
    "title": "Language Setting",
    "category": "System & Security",
    "parent": "Dashboard Control Center",
    "hierarchy": [
      "Admin Portal",
      "Dashboard Control",
      "Language Setting"
    ],
    "description": "Configure preferred system language, multi-lingual translations, and regional locale.",
    "keywords": [
      "preferences",
      "interface",
      "appearance",
      "customization",
      "language",
      "setting",
      "dashboard control center"
    ],
    "target": {
      "scope": "app",
      "view": "DashboardControl"
    },
    "iconName": "Globe",
    "badge": "Setting",
    "theme": "blue",
    "id": "language-setting"
  },
  {
    "title": "Customise Theme",
    "category": "System & Security",
    "parent": "Dashboard Control Center",
    "hierarchy": [
      "Admin Portal",
      "Dashboard Control",
      "Customise Theme"
    ],
    "description": "Personalize dashboard colors, themes, high-contrast mode, and branding appearance.",
    "keywords": [
      "preferences",
      "interface",
      "appearance",
      "customization",
      "customise",
      "theme",
      "dashboard control center",
      "setting"
    ],
    "target": {
      "scope": "app",
      "view": "DashboardControl"
    },
    "iconName": "Palette",
    "badge": "Setting",
    "theme": "indigo",
    "id": "customise-theme"
  },
  {
    "title": "Accessibility Setting",
    "category": "System & Security",
    "parent": "Dashboard Control Center",
    "hierarchy": [
      "Admin Portal",
      "Dashboard Control",
      "Accessibility Setting"
    ],
    "description": "Adjust accessibility options, screen reader support, and font scaling.",
    "keywords": [
      "preferences",
      "interface",
      "appearance",
      "customization",
      "accessibility",
      "setting",
      "dashboard control center"
    ],
    "target": {
      "scope": "app",
      "view": "DashboardControl"
    },
    "iconName": "Accessibility",
    "badge": "Setting",
    "theme": "emerald",
    "id": "accessibility-setting"
  },
  {
    "title": "Layout Setting",
    "category": "System & Security",
    "parent": "Dashboard Control Center",
    "hierarchy": [
      "Admin Portal",
      "Dashboard Control",
      "Layout Setting"
    ],
    "description": "Modify the structure, density, and arrangement of dashboard control panels.",
    "keywords": [
      "preferences",
      "interface",
      "appearance",
      "customization",
      "layout",
      "setting",
      "dashboard control center"
    ],
    "target": {
      "scope": "app",
      "view": "DashboardControl"
    },
    "iconName": "Layout",
    "badge": "Setting",
    "theme": "violet",
    "id": "layout-setting"
  },
  {
    "title": "Notification Setting",
    "category": "System & Security",
    "parent": "Dashboard Control Center",
    "hierarchy": [
      "Admin Portal",
      "Dashboard Control",
      "Notification Setting"
    ],
    "description": "Manage push notifications, desktop alerts, sound effects, and critical incident alerts.",
    "keywords": [
      "preferences",
      "interface",
      "appearance",
      "customization",
      "notification",
      "setting",
      "dashboard control center"
    ],
    "target": {
      "scope": "app",
      "view": "DashboardControl"
    },
    "iconName": "Bell",
    "badge": "Setting",
    "theme": "rose",
    "id": "notification-setting"
  },
  {
    "title": "Animation Setting",
    "category": "System & Security",
    "parent": "Dashboard Control Center",
    "hierarchy": [
      "Admin Portal",
      "Dashboard Control",
      "Animation Setting"
    ],
    "description": "Enable or disable smooth UI animations and micro-transitions for performance.",
    "keywords": [
      "preferences",
      "interface",
      "appearance",
      "customization",
      "animation",
      "setting",
      "dashboard control center"
    ],
    "target": {
      "scope": "app",
      "view": "DashboardControl"
    },
    "iconName": "MonitorPlay",
    "badge": "Setting",
    "theme": "amber",
    "id": "animation-setting"
  },
  {
    "title": "Zoom Controls",
    "category": "System & Security",
    "parent": "Dashboard Control Center",
    "hierarchy": [
      "Admin Portal",
      "Dashboard Control",
      "Zoom Controls"
    ],
    "description": "Adjust platform magnification and responsive zoom levels for optimal readability.",
    "keywords": [
      "preferences",
      "interface",
      "appearance",
      "customization",
      "zoom",
      "controls",
      "dashboard control center",
      "setting"
    ],
    "target": {
      "scope": "app",
      "view": "DashboardControl"
    },
    "iconName": "ZoomIn",
    "badge": "Setting",
    "theme": "cyan",
    "id": "zoom-controls"
  },
  {
    "title": "Voice Assistant",
    "category": "System & Security",
    "parent": "Dashboard Control Center",
    "hierarchy": [
      "Admin Portal",
      "Dashboard Control",
      "Voice Assistant"
    ],
    "description": "Configure speech recognition, voice navigation commands, and auditory feedback.",
    "keywords": [
      "preferences",
      "interface",
      "appearance",
      "customization",
      "voice",
      "assistant",
      "dashboard control center",
      "setting"
    ],
    "target": {
      "scope": "app",
      "view": "DashboardControl"
    },
    "iconName": "Mic",
    "badge": "Setting",
    "theme": "blue",
    "id": "voice-assistant"
  },
  {
    "title": "Platform Security",
    "category": "System & Security",
    "parent": "Dashboard Control Center",
    "hierarchy": [
      "Admin Portal",
      "Dashboard Control",
      "Platform Security"
    ],
    "description": "Review security compliance, encryption parameters, and portal hardening policies.",
    "keywords": [
      "preferences",
      "interface",
      "appearance",
      "customization",
      "platform",
      "security",
      "dashboard control center",
      "setting"
    ],
    "target": {
      "scope": "app",
      "view": "DashboardControl"
    },
    "iconName": "Shield",
    "badge": "Setting",
    "theme": "emerald",
    "id": "platform-security"
  },
  {
    "title": "2 Factor Authentication",
    "category": "System & Security",
    "parent": "Dashboard Control Center",
    "hierarchy": [
      "Admin Portal",
      "Dashboard Control",
      "2 Factor Authentication"
    ],
    "description": "Setup authenticator apps, SMS verification codes, and emergency backup tokens.",
    "keywords": [
      "preferences",
      "interface",
      "appearance",
      "customization",
      "factor",
      "authentication",
      "dashboard control center",
      "setting"
    ],
    "target": {
      "scope": "app",
      "view": "DashboardControl"
    },
    "iconName": "Lock",
    "badge": "Setting",
    "theme": "rose",
    "id": "2-factor-authentication"
  },
  {
    "id": "mgt-home",
    "title": "Home Management Control",
    "category": "Management Controls",
    "parent": "Management Controls Grid",
    "hierarchy": [
      "Management Controls",
      "Home Management Control"
    ],
    "description": "Configure hero sliders, announcements ticker, quick links, programs, and featured widgets.",
    "keywords": [
      "home",
      "management control",
      "dashboard",
      "management",
      "control",
      "management controls grid"
    ],
    "target": {
      "scope": "management",
      "view": "home"
    },
    "iconName": "Home",
    "badge": "Management",
    "theme": "blue"
  },
  {
    "id": "mgt-about-us",
    "title": "About Us Management Control",
    "category": "Management Controls",
    "parent": "Management Controls Grid",
    "hierarchy": [
      "Management Controls",
      "About Us Management Control"
    ],
    "description": "Manage mission, vision, leadership team profiles, legal compliance, and organizational milestones.",
    "keywords": [
      "about-us",
      "management control",
      "dashboard",
      "about",
      "management",
      "control",
      "management controls grid"
    ],
    "target": {
      "scope": "management",
      "view": "about-us"
    },
    "iconName": "Building2",
    "badge": "Management",
    "theme": "indigo"
  },
  {
    "id": "mgt-our-service",
    "title": "Our Service Management Control",
    "category": "Management Controls",
    "parent": "Management Controls Grid",
    "hierarchy": [
      "Management Controls",
      "Our Service Management Control"
    ],
    "description": "Configure citizen services, cyber advisory tiers, forensic support offerings, and SLA parameters.",
    "keywords": [
      "our-service",
      "management control",
      "dashboard",
      "our",
      "service",
      "management",
      "control",
      "management controls grid"
    ],
    "target": {
      "scope": "management",
      "view": "our-service"
    },
    "iconName": "ShieldCheck",
    "badge": "Management",
    "theme": "emerald"
  },
  {
    "id": "mgt-software-product",
    "title": "Software Product Management Control",
    "category": "Management Controls",
    "parent": "Management Controls Grid",
    "hierarchy": [
      "Management Controls",
      "Software Product Management Control"
    ],
    "description": "Deploy and control cybersecurity tools, defense patches, license registries, and release repositories.",
    "keywords": [
      "software-product",
      "management control",
      "dashboard",
      "software",
      "product",
      "management",
      "control",
      "management controls grid"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Management",
    "theme": "amber"
  },
  {
    "id": "mgt-skill-development",
    "title": "Skill Development Management Control",
    "category": "Courses & Training",
    "parent": "Management Controls Grid",
    "hierarchy": [
      "Management Controls",
      "Skill Development Management Control"
    ],
    "description": "Administer cyber awareness courses, workshops, certification exams, hackathons, and batches.",
    "keywords": [
      "skill-development",
      "management control",
      "dashboard",
      "skill",
      "development",
      "management",
      "control",
      "management controls grid"
    ],
    "target": {
      "scope": "management",
      "view": "skill-development"
    },
    "iconName": "Award",
    "badge": "Management",
    "theme": "rose"
  },
  {
    "id": "mgt-internships",
    "title": "Internship Management Control",
    "category": "Courses & Training",
    "parent": "Management Controls Grid",
    "hierarchy": [
      "Management Controls",
      "Internship Management Control"
    ],
    "description": "Oversee student and graduate internship programs across digital forensics, cyber crime, and security.",
    "keywords": [
      "internships",
      "management control",
      "dashboard",
      "internship",
      "management",
      "control",
      "management controls grid"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Management",
    "theme": "cyan"
  },
  {
    "id": "mgt-training-programs",
    "title": "Training Programs Management Control",
    "category": "Courses & Training",
    "parent": "Management Controls Grid",
    "hierarchy": [
      "Management Controls",
      "Training Programs Management Control"
    ],
    "description": "Configure 48 professional training curriculum modules, certifications, and operational masterclasses.",
    "keywords": [
      "training-programs",
      "management control",
      "dashboard",
      "training",
      "programs",
      "management",
      "control",
      "management controls grid"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Management",
    "theme": "violet"
  },
  {
    "id": "mgt-courses",
    "title": "Courses Management Control",
    "category": "Courses & Training",
    "parent": "Management Controls Grid",
    "hierarchy": [
      "Management Controls",
      "Courses Management Control"
    ],
    "description": "Curate comprehensive technical courses across ethical hacking, mobile forensics, and network security.",
    "keywords": [
      "courses",
      "management control",
      "dashboard",
      "management",
      "control",
      "management controls grid"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Management",
    "theme": "blue"
  },
  {
    "id": "mgt-gallery",
    "title": "Gallery Management Control",
    "category": "Galleries",
    "parent": "Management Controls Grid",
    "hierarchy": [
      "Management Controls",
      "Gallery Management Control"
    ],
    "description": "Central media portal managing 20 distinct galleries, albums, photo archives, and press coverages.",
    "keywords": [
      "gallery",
      "management control",
      "dashboard",
      "management",
      "control",
      "management controls grid"
    ],
    "target": {
      "scope": "management",
      "view": "gallery"
    },
    "iconName": "Image",
    "badge": "Management",
    "theme": "amber"
  },
  {
    "id": "mgt-header",
    "title": "Header Management Control",
    "category": "Management Controls",
    "parent": "Management Controls Grid",
    "hierarchy": [
      "Management Controls",
      "Header Management Control"
    ],
    "description": "Customize navigation items, government emblems, search parameters, and portal status badges.",
    "keywords": [
      "header",
      "management control",
      "dashboard",
      "management",
      "control",
      "management controls grid"
    ],
    "target": {
      "scope": "management",
      "view": "header"
    },
    "iconName": "Globe",
    "badge": "Management",
    "theme": "blue"
  },
  {
    "id": "mgt-footer",
    "title": "Footer Management Control",
    "category": "Management Controls",
    "parent": "Management Controls Grid",
    "hierarchy": [
      "Management Controls",
      "Footer Management Control"
    ],
    "description": "Manage footer links, official addresses, developer credits, privacy notices, and portals.",
    "keywords": [
      "footer",
      "management control",
      "dashboard",
      "management",
      "control",
      "management controls grid"
    ],
    "target": {
      "scope": "management",
      "view": "footer"
    },
    "iconName": "Layers",
    "badge": "Management",
    "theme": "emerald"
  },
  {
    "id": "mgt-doc-verification",
    "title": "Document Verification Department",
    "category": "Verification Services",
    "parent": "Management Controls Grid",
    "hierarchy": [
      "Management Controls",
      "Document Verification Department"
    ],
    "description": "Verify 24 credential types including certificates, marksheets, police verification, and passports.",
    "keywords": [
      "doc-verification",
      "management control",
      "dashboard",
      "document",
      "verification",
      "department",
      "management controls grid",
      "management"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Management",
    "theme": "cyan"
  },
  {
    "id": "mgt-online-app",
    "title": "Online Application Portal",
    "category": "Online Applications",
    "parent": "Management Controls Grid",
    "hierarchy": [
      "Management Controls",
      "Online Application Portal"
    ],
    "description": "Process 30 distinct online application forms from student certificates to cyber incident FIR registrations.",
    "keywords": [
      "online-app",
      "management control",
      "dashboard",
      "online",
      "application",
      "portal",
      "management controls grid",
      "management"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Management",
    "theme": "indigo"
  },
  {
    "id": "mgt-insights",
    "title": "Insights Management Control",
    "category": "Management Controls",
    "parent": "Management Controls Grid",
    "hierarchy": [
      "Management Controls",
      "Insights Management Control"
    ],
    "description": "Curate threat analysis bulletins, malware outbreak reports, whitepapers, and vulnerability disclosures.",
    "keywords": [
      "insights",
      "management control",
      "dashboard",
      "management",
      "control",
      "management controls grid"
    ],
    "target": {
      "scope": "management",
      "view": "insights"
    },
    "iconName": "Activity",
    "badge": "Management",
    "theme": "rose"
  },
  {
    "id": "mgt-app-status",
    "title": "Check Application Status Control",
    "category": "Verification Services",
    "parent": "Management Controls Grid",
    "hierarchy": [
      "Management Controls",
      "Check Application Status Control"
    ],
    "description": "Search citizen token references, check FIR investigation status, and track verification workflows.",
    "keywords": [
      "app-status",
      "management control",
      "dashboard",
      "check",
      "application",
      "status",
      "control",
      "management controls grid",
      "management"
    ],
    "target": {
      "scope": "management",
      "view": "app-status"
    },
    "iconName": "Search",
    "badge": "Management",
    "theme": "emerald"
  },
  {
    "id": "mgt-demo",
    "title": "Demo Management Control",
    "category": "Management Controls",
    "parent": "Management Controls Grid",
    "hierarchy": [
      "Management Controls",
      "Demo Management Control"
    ],
    "description": "Simulation sandbox, feature testing environments, interactive drills, and module verification previews.",
    "keywords": [
      "demo",
      "management control",
      "dashboard",
      "management",
      "control",
      "management controls grid"
    ],
    "target": {
      "scope": "management",
      "view": "demo"
    },
    "iconName": "Play",
    "badge": "Management",
    "theme": "indigo"
  },
  {
    "id": "mgt-report-crime",
    "title": "Report Cyber Crime Management Control",
    "category": "Cyber Crime & Support",
    "parent": "Management Controls Grid",
    "hierarchy": [
      "Management Controls",
      "Report Cyber Crime Management Control"
    ],
    "description": "Incident reporting desks, victim assistance protocols, financial fraud complaints, and case tracking.",
    "keywords": [
      "report-crime",
      "management control",
      "dashboard",
      "report",
      "cyber",
      "crime",
      "management",
      "control",
      "management controls grid"
    ],
    "target": {
      "scope": "management",
      "view": "report-crime"
    },
    "iconName": "ShieldAlert",
    "badge": "Management",
    "theme": "rose"
  },
  {
    "id": "gal-journey-gallery",
    "title": "Journey Gallery",
    "category": "Galleries",
    "parent": "Gallery Management Control",
    "hierarchy": [
      "Gallery Management",
      "Journey Gallery"
    ],
    "description": "Chronological photo archives showcasing organizational journey, milestones, and history.",
    "keywords": [
      "journey gallery",
      "gallery",
      "photos",
      "albums",
      "media",
      "pictures",
      "images",
      "add photo",
      "upload photo",
      "manage photo",
      "view photo",
      "journey",
      "gallery management control"
    ],
    "target": {
      "scope": "management",
      "view": "journey-gallery"
    },
    "iconName": "Image",
    "badge": "Gallery",
    "theme": "blue"
  },
  {
    "id": "journey-gallery-add-photo",
    "title": "Add Photo — Journey Gallery",
    "category": "Galleries",
    "parent": "Journey Gallery",
    "hierarchy": [
      "Gallery Management",
      "Journey Gallery",
      "Add Photo"
    ],
    "description": "Add new high-resolution photographs, metadata tags, and captions to the gallery. (Inside Journey Gallery)",
    "keywords": [
      "add photo",
      "journey gallery",
      "photo action",
      "card",
      "add",
      "photo",
      "journey",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "journey-gallery"
    },
    "iconName": "Zap",
    "badge": "Photo Action",
    "theme": "blue"
  },
  {
    "id": "journey-gallery-view-photo",
    "title": "View Photo — Journey Gallery",
    "category": "Galleries",
    "parent": "Journey Gallery",
    "hierarchy": [
      "Gallery Management",
      "Journey Gallery",
      "View Photo"
    ],
    "description": "Browse and inspect all stored pictures in full-screen gallery view mode. (Inside Journey Gallery)",
    "keywords": [
      "view photo",
      "journey gallery",
      "photo action",
      "card",
      "view",
      "photo",
      "journey",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "journey-gallery"
    },
    "iconName": "Eye",
    "badge": "Photo Action",
    "theme": "indigo"
  },
  {
    "id": "journey-gallery-manage-photo",
    "title": "Manage Photo — Journey Gallery",
    "category": "Galleries",
    "parent": "Journey Gallery",
    "hierarchy": [
      "Gallery Management",
      "Journey Gallery",
      "Manage Photo"
    ],
    "description": "Edit captions, reorder photo albums, adjust permissions, or remove obsolete files. (Inside Journey Gallery)",
    "keywords": [
      "manage photo",
      "journey gallery",
      "photo action",
      "card",
      "manage",
      "photo",
      "journey",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "journey-gallery"
    },
    "iconName": "Settings",
    "badge": "Photo Action",
    "theme": "emerald"
  },
  {
    "id": "journey-gallery-upload-photo",
    "title": "Upload Photo — Journey Gallery",
    "category": "Galleries",
    "parent": "Journey Gallery",
    "hierarchy": [
      "Gallery Management",
      "Journey Gallery",
      "Upload Photo"
    ],
    "description": "Bulk upload media files, drag-and-drop batch archives, and synchronize to cloud storage. (Inside Journey Gallery)",
    "keywords": [
      "upload photo",
      "journey gallery",
      "photo action",
      "card",
      "upload",
      "photo",
      "journey",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "journey-gallery"
    },
    "iconName": "Cloud",
    "badge": "Photo Action",
    "theme": "violet"
  },
  {
    "id": "gal-course-gallery",
    "title": "Course Gallery",
    "category": "Galleries",
    "parent": "Gallery Management Control",
    "hierarchy": [
      "Gallery Management",
      "Course Gallery"
    ],
    "description": "Photos from courses, hands-on lab sessions, cyber defense drills, and student workshops.",
    "keywords": [
      "course gallery",
      "gallery",
      "photos",
      "albums",
      "media",
      "pictures",
      "images",
      "add photo",
      "upload photo",
      "manage photo",
      "view photo",
      "course",
      "gallery management control"
    ],
    "target": {
      "scope": "management",
      "view": "course-gallery"
    },
    "iconName": "Image",
    "badge": "Gallery",
    "theme": "blue"
  },
  {
    "id": "course-gallery-add-photo",
    "title": "Add Photo — Course Gallery",
    "category": "Galleries",
    "parent": "Course Gallery",
    "hierarchy": [
      "Gallery Management",
      "Course Gallery",
      "Add Photo"
    ],
    "description": "Add new high-resolution photographs, metadata tags, and captions to the gallery. (Inside Course Gallery)",
    "keywords": [
      "add photo",
      "course gallery",
      "photo action",
      "card",
      "add",
      "photo",
      "course",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "course-gallery"
    },
    "iconName": "Zap",
    "badge": "Photo Action",
    "theme": "blue"
  },
  {
    "id": "course-gallery-view-photo",
    "title": "View Photo — Course Gallery",
    "category": "Galleries",
    "parent": "Course Gallery",
    "hierarchy": [
      "Gallery Management",
      "Course Gallery",
      "View Photo"
    ],
    "description": "Browse and inspect all stored pictures in full-screen gallery view mode. (Inside Course Gallery)",
    "keywords": [
      "view photo",
      "course gallery",
      "photo action",
      "card",
      "view",
      "photo",
      "course",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "course-gallery"
    },
    "iconName": "Eye",
    "badge": "Photo Action",
    "theme": "indigo"
  },
  {
    "id": "course-gallery-manage-photo",
    "title": "Manage Photo — Course Gallery",
    "category": "Galleries",
    "parent": "Course Gallery",
    "hierarchy": [
      "Gallery Management",
      "Course Gallery",
      "Manage Photo"
    ],
    "description": "Edit captions, reorder photo albums, adjust permissions, or remove obsolete files. (Inside Course Gallery)",
    "keywords": [
      "manage photo",
      "course gallery",
      "photo action",
      "card",
      "manage",
      "photo",
      "course",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "course-gallery"
    },
    "iconName": "Settings",
    "badge": "Photo Action",
    "theme": "emerald"
  },
  {
    "id": "course-gallery-upload-photo",
    "title": "Upload Photo — Course Gallery",
    "category": "Galleries",
    "parent": "Course Gallery",
    "hierarchy": [
      "Gallery Management",
      "Course Gallery",
      "Upload Photo"
    ],
    "description": "Bulk upload media files, drag-and-drop batch archives, and synchronize to cloud storage. (Inside Course Gallery)",
    "keywords": [
      "upload photo",
      "course gallery",
      "photo action",
      "card",
      "upload",
      "photo",
      "course",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "course-gallery"
    },
    "iconName": "Cloud",
    "badge": "Photo Action",
    "theme": "violet"
  },
  {
    "id": "gal-study-gallery",
    "title": "Study Gallery",
    "category": "Galleries",
    "parent": "Gallery Management Control",
    "hierarchy": [
      "Gallery Management",
      "Study Gallery"
    ],
    "description": "Photos featuring students, academic study groups, forensic labs, and research libraries.",
    "keywords": [
      "study gallery",
      "gallery",
      "photos",
      "albums",
      "media",
      "pictures",
      "images",
      "add photo",
      "upload photo",
      "manage photo",
      "view photo",
      "study",
      "gallery management control"
    ],
    "target": {
      "scope": "management",
      "view": "study-gallery"
    },
    "iconName": "Image",
    "badge": "Gallery",
    "theme": "blue"
  },
  {
    "id": "study-gallery-add-photo",
    "title": "Add Photo — Study Gallery",
    "category": "Galleries",
    "parent": "Study Gallery",
    "hierarchy": [
      "Gallery Management",
      "Study Gallery",
      "Add Photo"
    ],
    "description": "Add new high-resolution photographs, metadata tags, and captions to the gallery. (Inside Study Gallery)",
    "keywords": [
      "add photo",
      "study gallery",
      "photo action",
      "card",
      "add",
      "photo",
      "study",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "study-gallery"
    },
    "iconName": "Zap",
    "badge": "Photo Action",
    "theme": "blue"
  },
  {
    "id": "study-gallery-view-photo",
    "title": "View Photo — Study Gallery",
    "category": "Galleries",
    "parent": "Study Gallery",
    "hierarchy": [
      "Gallery Management",
      "Study Gallery",
      "View Photo"
    ],
    "description": "Browse and inspect all stored pictures in full-screen gallery view mode. (Inside Study Gallery)",
    "keywords": [
      "view photo",
      "study gallery",
      "photo action",
      "card",
      "view",
      "photo",
      "study",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "study-gallery"
    },
    "iconName": "Eye",
    "badge": "Photo Action",
    "theme": "indigo"
  },
  {
    "id": "study-gallery-manage-photo",
    "title": "Manage Photo — Study Gallery",
    "category": "Galleries",
    "parent": "Study Gallery",
    "hierarchy": [
      "Gallery Management",
      "Study Gallery",
      "Manage Photo"
    ],
    "description": "Edit captions, reorder photo albums, adjust permissions, or remove obsolete files. (Inside Study Gallery)",
    "keywords": [
      "manage photo",
      "study gallery",
      "photo action",
      "card",
      "manage",
      "photo",
      "study",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "study-gallery"
    },
    "iconName": "Settings",
    "badge": "Photo Action",
    "theme": "emerald"
  },
  {
    "id": "study-gallery-upload-photo",
    "title": "Upload Photo — Study Gallery",
    "category": "Galleries",
    "parent": "Study Gallery",
    "hierarchy": [
      "Gallery Management",
      "Study Gallery",
      "Upload Photo"
    ],
    "description": "Bulk upload media files, drag-and-drop batch archives, and synchronize to cloud storage. (Inside Study Gallery)",
    "keywords": [
      "upload photo",
      "study gallery",
      "photo action",
      "card",
      "upload",
      "photo",
      "study",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "study-gallery"
    },
    "iconName": "Cloud",
    "badge": "Photo Action",
    "theme": "violet"
  },
  {
    "id": "gal-intensive-gallery",
    "title": "Intensive Gallery",
    "category": "Galleries",
    "parent": "Gallery Management Control",
    "hierarchy": [
      "Gallery Management",
      "Intensive Gallery"
    ],
    "description": "Photos from intensive bootcamps, high-speed forensics training, and hackathons.",
    "keywords": [
      "intensive gallery",
      "gallery",
      "photos",
      "albums",
      "media",
      "pictures",
      "images",
      "add photo",
      "upload photo",
      "manage photo",
      "view photo",
      "intensive",
      "gallery management control"
    ],
    "target": {
      "scope": "management",
      "view": "intensive-gallery"
    },
    "iconName": "Image",
    "badge": "Gallery",
    "theme": "blue"
  },
  {
    "id": "intensive-gallery-add-photo",
    "title": "Add Photo — Intensive Gallery",
    "category": "Galleries",
    "parent": "Intensive Gallery",
    "hierarchy": [
      "Gallery Management",
      "Intensive Gallery",
      "Add Photo"
    ],
    "description": "Add new high-resolution photographs, metadata tags, and captions to the gallery. (Inside Intensive Gallery)",
    "keywords": [
      "add photo",
      "intensive gallery",
      "photo action",
      "card",
      "add",
      "photo",
      "intensive",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "intensive-gallery"
    },
    "iconName": "Zap",
    "badge": "Photo Action",
    "theme": "blue"
  },
  {
    "id": "intensive-gallery-view-photo",
    "title": "View Photo — Intensive Gallery",
    "category": "Galleries",
    "parent": "Intensive Gallery",
    "hierarchy": [
      "Gallery Management",
      "Intensive Gallery",
      "View Photo"
    ],
    "description": "Browse and inspect all stored pictures in full-screen gallery view mode. (Inside Intensive Gallery)",
    "keywords": [
      "view photo",
      "intensive gallery",
      "photo action",
      "card",
      "view",
      "photo",
      "intensive",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "intensive-gallery"
    },
    "iconName": "Eye",
    "badge": "Photo Action",
    "theme": "indigo"
  },
  {
    "id": "intensive-gallery-manage-photo",
    "title": "Manage Photo — Intensive Gallery",
    "category": "Galleries",
    "parent": "Intensive Gallery",
    "hierarchy": [
      "Gallery Management",
      "Intensive Gallery",
      "Manage Photo"
    ],
    "description": "Edit captions, reorder photo albums, adjust permissions, or remove obsolete files. (Inside Intensive Gallery)",
    "keywords": [
      "manage photo",
      "intensive gallery",
      "photo action",
      "card",
      "manage",
      "photo",
      "intensive",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "intensive-gallery"
    },
    "iconName": "Settings",
    "badge": "Photo Action",
    "theme": "emerald"
  },
  {
    "id": "intensive-gallery-upload-photo",
    "title": "Upload Photo — Intensive Gallery",
    "category": "Galleries",
    "parent": "Intensive Gallery",
    "hierarchy": [
      "Gallery Management",
      "Intensive Gallery",
      "Upload Photo"
    ],
    "description": "Bulk upload media files, drag-and-drop batch archives, and synchronize to cloud storage. (Inside Intensive Gallery)",
    "keywords": [
      "upload photo",
      "intensive gallery",
      "photo action",
      "card",
      "upload",
      "photo",
      "intensive",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "intensive-gallery"
    },
    "iconName": "Cloud",
    "badge": "Photo Action",
    "theme": "violet"
  },
  {
    "id": "gal-photo-project-gallery",
    "title": "Photo Project Gallery",
    "category": "Galleries",
    "parent": "Gallery Management Control",
    "hierarchy": [
      "Gallery Management",
      "Photo Project Gallery"
    ],
    "description": "Photos showcasing field deployments, forensic hardware projects, and special operations.",
    "keywords": [
      "photo project gallery",
      "gallery",
      "photos",
      "albums",
      "media",
      "pictures",
      "images",
      "add photo",
      "upload photo",
      "manage photo",
      "view photo",
      "photo",
      "project",
      "gallery management control"
    ],
    "target": {
      "scope": "management",
      "view": "photo-project-gallery"
    },
    "iconName": "Image",
    "badge": "Gallery",
    "theme": "blue"
  },
  {
    "id": "photo-project-gallery-add-photo",
    "title": "Add Photo — Photo Project Gallery",
    "category": "Galleries",
    "parent": "Photo Project Gallery",
    "hierarchy": [
      "Gallery Management",
      "Photo Project Gallery",
      "Add Photo"
    ],
    "description": "Add new high-resolution photographs, metadata tags, and captions to the gallery. (Inside Photo Project Gallery)",
    "keywords": [
      "add photo",
      "photo project gallery",
      "photo action",
      "card",
      "add",
      "photo",
      "project",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "photo-project-gallery"
    },
    "iconName": "Zap",
    "badge": "Photo Action",
    "theme": "blue"
  },
  {
    "id": "photo-project-gallery-view-photo",
    "title": "View Photo — Photo Project Gallery",
    "category": "Galleries",
    "parent": "Photo Project Gallery",
    "hierarchy": [
      "Gallery Management",
      "Photo Project Gallery",
      "View Photo"
    ],
    "description": "Browse and inspect all stored pictures in full-screen gallery view mode. (Inside Photo Project Gallery)",
    "keywords": [
      "view photo",
      "photo project gallery",
      "photo action",
      "card",
      "view",
      "photo",
      "project",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "photo-project-gallery"
    },
    "iconName": "Eye",
    "badge": "Photo Action",
    "theme": "indigo"
  },
  {
    "id": "photo-project-gallery-manage-photo",
    "title": "Manage Photo — Photo Project Gallery",
    "category": "Galleries",
    "parent": "Photo Project Gallery",
    "hierarchy": [
      "Gallery Management",
      "Photo Project Gallery",
      "Manage Photo"
    ],
    "description": "Edit captions, reorder photo albums, adjust permissions, or remove obsolete files. (Inside Photo Project Gallery)",
    "keywords": [
      "manage photo",
      "photo project gallery",
      "photo action",
      "card",
      "manage",
      "photo",
      "project",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "photo-project-gallery"
    },
    "iconName": "Settings",
    "badge": "Photo Action",
    "theme": "emerald"
  },
  {
    "id": "photo-project-gallery-upload-photo",
    "title": "Upload Photo — Photo Project Gallery",
    "category": "Galleries",
    "parent": "Photo Project Gallery",
    "hierarchy": [
      "Gallery Management",
      "Photo Project Gallery",
      "Upload Photo"
    ],
    "description": "Bulk upload media files, drag-and-drop batch archives, and synchronize to cloud storage. (Inside Photo Project Gallery)",
    "keywords": [
      "upload photo",
      "photo project gallery",
      "photo action",
      "card",
      "upload",
      "photo",
      "project",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "photo-project-gallery"
    },
    "iconName": "Cloud",
    "badge": "Photo Action",
    "theme": "violet"
  },
  {
    "id": "gal-event-gallery",
    "title": "Event Gallery",
    "category": "Galleries",
    "parent": "Gallery Management Control",
    "hierarchy": [
      "Gallery Management",
      "Event Gallery"
    ],
    "description": "Photos from major cybersecurity conferences, annual summits, and regional symposiums.",
    "keywords": [
      "event gallery",
      "gallery",
      "photos",
      "albums",
      "media",
      "pictures",
      "images",
      "add photo",
      "upload photo",
      "manage photo",
      "view photo",
      "event",
      "gallery management control"
    ],
    "target": {
      "scope": "management",
      "view": "event-gallery"
    },
    "iconName": "Image",
    "badge": "Gallery",
    "theme": "blue"
  },
  {
    "id": "event-gallery-add-photo",
    "title": "Add Photo — Event Gallery",
    "category": "Galleries",
    "parent": "Event Gallery",
    "hierarchy": [
      "Gallery Management",
      "Event Gallery",
      "Add Photo"
    ],
    "description": "Add new high-resolution photographs, metadata tags, and captions to the gallery. (Inside Event Gallery)",
    "keywords": [
      "add photo",
      "event gallery",
      "photo action",
      "card",
      "add",
      "photo",
      "event",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "event-gallery"
    },
    "iconName": "Zap",
    "badge": "Photo Action",
    "theme": "blue"
  },
  {
    "id": "event-gallery-view-photo",
    "title": "View Photo — Event Gallery",
    "category": "Galleries",
    "parent": "Event Gallery",
    "hierarchy": [
      "Gallery Management",
      "Event Gallery",
      "View Photo"
    ],
    "description": "Browse and inspect all stored pictures in full-screen gallery view mode. (Inside Event Gallery)",
    "keywords": [
      "view photo",
      "event gallery",
      "photo action",
      "card",
      "view",
      "photo",
      "event",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "event-gallery"
    },
    "iconName": "Eye",
    "badge": "Photo Action",
    "theme": "indigo"
  },
  {
    "id": "event-gallery-manage-photo",
    "title": "Manage Photo — Event Gallery",
    "category": "Galleries",
    "parent": "Event Gallery",
    "hierarchy": [
      "Gallery Management",
      "Event Gallery",
      "Manage Photo"
    ],
    "description": "Edit captions, reorder photo albums, adjust permissions, or remove obsolete files. (Inside Event Gallery)",
    "keywords": [
      "manage photo",
      "event gallery",
      "photo action",
      "card",
      "manage",
      "photo",
      "event",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "event-gallery"
    },
    "iconName": "Settings",
    "badge": "Photo Action",
    "theme": "emerald"
  },
  {
    "id": "event-gallery-upload-photo",
    "title": "Upload Photo — Event Gallery",
    "category": "Galleries",
    "parent": "Event Gallery",
    "hierarchy": [
      "Gallery Management",
      "Event Gallery",
      "Upload Photo"
    ],
    "description": "Bulk upload media files, drag-and-drop batch archives, and synchronize to cloud storage. (Inside Event Gallery)",
    "keywords": [
      "upload photo",
      "event gallery",
      "photo action",
      "card",
      "upload",
      "photo",
      "event",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "event-gallery"
    },
    "iconName": "Cloud",
    "badge": "Photo Action",
    "theme": "violet"
  },
  {
    "id": "gal-employee-gallery",
    "title": "Employee Gallery",
    "category": "Galleries",
    "parent": "Gallery Management Control",
    "hierarchy": [
      "Gallery Management",
      "Employee Gallery"
    ],
    "description": "Photos featuring police officers, forensic researchers, investigation specialists, and staff.",
    "keywords": [
      "employee gallery",
      "gallery",
      "photos",
      "albums",
      "media",
      "pictures",
      "images",
      "add photo",
      "upload photo",
      "manage photo",
      "view photo",
      "employee",
      "gallery management control"
    ],
    "target": {
      "scope": "management",
      "view": "employee-gallery"
    },
    "iconName": "Image",
    "badge": "Gallery",
    "theme": "blue"
  },
  {
    "id": "employee-gallery-add-photo",
    "title": "Add Photo — Employee Gallery",
    "category": "Galleries",
    "parent": "Employee Gallery",
    "hierarchy": [
      "Gallery Management",
      "Employee Gallery",
      "Add Photo"
    ],
    "description": "Add new high-resolution photographs, metadata tags, and captions to the gallery. (Inside Employee Gallery)",
    "keywords": [
      "add photo",
      "employee gallery",
      "photo action",
      "card",
      "add",
      "photo",
      "employee",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "employee-gallery"
    },
    "iconName": "Zap",
    "badge": "Photo Action",
    "theme": "blue"
  },
  {
    "id": "employee-gallery-view-photo",
    "title": "View Photo — Employee Gallery",
    "category": "Galleries",
    "parent": "Employee Gallery",
    "hierarchy": [
      "Gallery Management",
      "Employee Gallery",
      "View Photo"
    ],
    "description": "Browse and inspect all stored pictures in full-screen gallery view mode. (Inside Employee Gallery)",
    "keywords": [
      "view photo",
      "employee gallery",
      "photo action",
      "card",
      "view",
      "photo",
      "employee",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "employee-gallery"
    },
    "iconName": "Eye",
    "badge": "Photo Action",
    "theme": "indigo"
  },
  {
    "id": "employee-gallery-manage-photo",
    "title": "Manage Photo — Employee Gallery",
    "category": "Galleries",
    "parent": "Employee Gallery",
    "hierarchy": [
      "Gallery Management",
      "Employee Gallery",
      "Manage Photo"
    ],
    "description": "Edit captions, reorder photo albums, adjust permissions, or remove obsolete files. (Inside Employee Gallery)",
    "keywords": [
      "manage photo",
      "employee gallery",
      "photo action",
      "card",
      "manage",
      "photo",
      "employee",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "employee-gallery"
    },
    "iconName": "Settings",
    "badge": "Photo Action",
    "theme": "emerald"
  },
  {
    "id": "employee-gallery-upload-photo",
    "title": "Upload Photo — Employee Gallery",
    "category": "Galleries",
    "parent": "Employee Gallery",
    "hierarchy": [
      "Gallery Management",
      "Employee Gallery",
      "Upload Photo"
    ],
    "description": "Bulk upload media files, drag-and-drop batch archives, and synchronize to cloud storage. (Inside Employee Gallery)",
    "keywords": [
      "upload photo",
      "employee gallery",
      "photo action",
      "card",
      "upload",
      "photo",
      "employee",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "employee-gallery"
    },
    "iconName": "Cloud",
    "badge": "Photo Action",
    "theme": "violet"
  },
  {
    "id": "gal-annual-celebration-gallery",
    "title": "Annual Celebration Gallery",
    "category": "Galleries",
    "parent": "Gallery Management Control",
    "hierarchy": [
      "Gallery Management",
      "Annual Celebration Gallery"
    ],
    "description": "Photos from annual Foundation Day galas, festival gatherings, and celebrations.",
    "keywords": [
      "annual celebration gallery",
      "gallery",
      "photos",
      "albums",
      "media",
      "pictures",
      "images",
      "add photo",
      "upload photo",
      "manage photo",
      "view photo",
      "annual",
      "celebration",
      "gallery management control"
    ],
    "target": {
      "scope": "management",
      "view": "annual-celebration-gallery"
    },
    "iconName": "Image",
    "badge": "Gallery",
    "theme": "blue"
  },
  {
    "id": "annual-celebration-gallery-add-photo",
    "title": "Add Photo — Annual Celebration Gallery",
    "category": "Galleries",
    "parent": "Annual Celebration Gallery",
    "hierarchy": [
      "Gallery Management",
      "Annual Celebration Gallery",
      "Add Photo"
    ],
    "description": "Add new high-resolution photographs, metadata tags, and captions to the gallery. (Inside Annual Celebration Gallery)",
    "keywords": [
      "add photo",
      "annual celebration gallery",
      "photo action",
      "card",
      "add",
      "photo",
      "annual",
      "celebration",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "annual-celebration-gallery"
    },
    "iconName": "Zap",
    "badge": "Photo Action",
    "theme": "blue"
  },
  {
    "id": "annual-celebration-gallery-view-photo",
    "title": "View Photo — Annual Celebration Gallery",
    "category": "Galleries",
    "parent": "Annual Celebration Gallery",
    "hierarchy": [
      "Gallery Management",
      "Annual Celebration Gallery",
      "View Photo"
    ],
    "description": "Browse and inspect all stored pictures in full-screen gallery view mode. (Inside Annual Celebration Gallery)",
    "keywords": [
      "view photo",
      "annual celebration gallery",
      "photo action",
      "card",
      "view",
      "photo",
      "annual",
      "celebration",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "annual-celebration-gallery"
    },
    "iconName": "Eye",
    "badge": "Photo Action",
    "theme": "indigo"
  },
  {
    "id": "annual-celebration-gallery-manage-photo",
    "title": "Manage Photo — Annual Celebration Gallery",
    "category": "Galleries",
    "parent": "Annual Celebration Gallery",
    "hierarchy": [
      "Gallery Management",
      "Annual Celebration Gallery",
      "Manage Photo"
    ],
    "description": "Edit captions, reorder photo albums, adjust permissions, or remove obsolete files. (Inside Annual Celebration Gallery)",
    "keywords": [
      "manage photo",
      "annual celebration gallery",
      "photo action",
      "card",
      "manage",
      "photo",
      "annual",
      "celebration",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "annual-celebration-gallery"
    },
    "iconName": "Settings",
    "badge": "Photo Action",
    "theme": "emerald"
  },
  {
    "id": "annual-celebration-gallery-upload-photo",
    "title": "Upload Photo — Annual Celebration Gallery",
    "category": "Galleries",
    "parent": "Annual Celebration Gallery",
    "hierarchy": [
      "Gallery Management",
      "Annual Celebration Gallery",
      "Upload Photo"
    ],
    "description": "Bulk upload media files, drag-and-drop batch archives, and synchronize to cloud storage. (Inside Annual Celebration Gallery)",
    "keywords": [
      "upload photo",
      "annual celebration gallery",
      "photo action",
      "card",
      "upload",
      "photo",
      "annual",
      "celebration",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "annual-celebration-gallery"
    },
    "iconName": "Cloud",
    "badge": "Photo Action",
    "theme": "violet"
  },
  {
    "id": "gal-achievement-gallery",
    "title": "Achievement Gallery",
    "category": "Galleries",
    "parent": "Gallery Management Control",
    "hierarchy": [
      "Gallery Management",
      "Achievement Gallery"
    ],
    "description": "Photos highlighting crime-solving milestones, institutional citations, and records.",
    "keywords": [
      "achievement gallery",
      "gallery",
      "photos",
      "albums",
      "media",
      "pictures",
      "images",
      "add photo",
      "upload photo",
      "manage photo",
      "view photo",
      "achievement",
      "gallery management control"
    ],
    "target": {
      "scope": "management",
      "view": "achievement-gallery"
    },
    "iconName": "Image",
    "badge": "Gallery",
    "theme": "blue"
  },
  {
    "id": "achievement-gallery-add-photo",
    "title": "Add Photo — Achievement Gallery",
    "category": "Galleries",
    "parent": "Achievement Gallery",
    "hierarchy": [
      "Gallery Management",
      "Achievement Gallery",
      "Add Photo"
    ],
    "description": "Add new high-resolution photographs, metadata tags, and captions to the gallery. (Inside Achievement Gallery)",
    "keywords": [
      "add photo",
      "achievement gallery",
      "photo action",
      "card",
      "add",
      "photo",
      "achievement",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "achievement-gallery"
    },
    "iconName": "Zap",
    "badge": "Photo Action",
    "theme": "blue"
  },
  {
    "id": "achievement-gallery-view-photo",
    "title": "View Photo — Achievement Gallery",
    "category": "Galleries",
    "parent": "Achievement Gallery",
    "hierarchy": [
      "Gallery Management",
      "Achievement Gallery",
      "View Photo"
    ],
    "description": "Browse and inspect all stored pictures in full-screen gallery view mode. (Inside Achievement Gallery)",
    "keywords": [
      "view photo",
      "achievement gallery",
      "photo action",
      "card",
      "view",
      "photo",
      "achievement",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "achievement-gallery"
    },
    "iconName": "Eye",
    "badge": "Photo Action",
    "theme": "indigo"
  },
  {
    "id": "achievement-gallery-manage-photo",
    "title": "Manage Photo — Achievement Gallery",
    "category": "Galleries",
    "parent": "Achievement Gallery",
    "hierarchy": [
      "Gallery Management",
      "Achievement Gallery",
      "Manage Photo"
    ],
    "description": "Edit captions, reorder photo albums, adjust permissions, or remove obsolete files. (Inside Achievement Gallery)",
    "keywords": [
      "manage photo",
      "achievement gallery",
      "photo action",
      "card",
      "manage",
      "photo",
      "achievement",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "achievement-gallery"
    },
    "iconName": "Settings",
    "badge": "Photo Action",
    "theme": "emerald"
  },
  {
    "id": "achievement-gallery-upload-photo",
    "title": "Upload Photo — Achievement Gallery",
    "category": "Galleries",
    "parent": "Achievement Gallery",
    "hierarchy": [
      "Gallery Management",
      "Achievement Gallery",
      "Upload Photo"
    ],
    "description": "Bulk upload media files, drag-and-drop batch archives, and synchronize to cloud storage. (Inside Achievement Gallery)",
    "keywords": [
      "upload photo",
      "achievement gallery",
      "photo action",
      "card",
      "upload",
      "photo",
      "achievement",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "achievement-gallery"
    },
    "iconName": "Cloud",
    "badge": "Photo Action",
    "theme": "violet"
  },
  {
    "id": "gal-work-highlight-gallery",
    "title": "Work Highlight Gallery",
    "category": "Galleries",
    "parent": "Gallery Management Control",
    "hierarchy": [
      "Gallery Management",
      "Work Highlight Gallery"
    ],
    "description": "Photos capturing live digital evidence extraction, laboratory operations, and investigations.",
    "keywords": [
      "work highlight gallery",
      "gallery",
      "photos",
      "albums",
      "media",
      "pictures",
      "images",
      "add photo",
      "upload photo",
      "manage photo",
      "view photo",
      "work",
      "highlight",
      "gallery management control"
    ],
    "target": {
      "scope": "management",
      "view": "work-highlight-gallery"
    },
    "iconName": "Image",
    "badge": "Gallery",
    "theme": "blue"
  },
  {
    "id": "work-highlight-gallery-add-photo",
    "title": "Add Photo — Work Highlight Gallery",
    "category": "Galleries",
    "parent": "Work Highlight Gallery",
    "hierarchy": [
      "Gallery Management",
      "Work Highlight Gallery",
      "Add Photo"
    ],
    "description": "Add new high-resolution photographs, metadata tags, and captions to the gallery. (Inside Work Highlight Gallery)",
    "keywords": [
      "add photo",
      "work highlight gallery",
      "photo action",
      "card",
      "add",
      "photo",
      "work",
      "highlight",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "work-highlight-gallery"
    },
    "iconName": "Zap",
    "badge": "Photo Action",
    "theme": "blue"
  },
  {
    "id": "work-highlight-gallery-view-photo",
    "title": "View Photo — Work Highlight Gallery",
    "category": "Galleries",
    "parent": "Work Highlight Gallery",
    "hierarchy": [
      "Gallery Management",
      "Work Highlight Gallery",
      "View Photo"
    ],
    "description": "Browse and inspect all stored pictures in full-screen gallery view mode. (Inside Work Highlight Gallery)",
    "keywords": [
      "view photo",
      "work highlight gallery",
      "photo action",
      "card",
      "view",
      "photo",
      "work",
      "highlight",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "work-highlight-gallery"
    },
    "iconName": "Eye",
    "badge": "Photo Action",
    "theme": "indigo"
  },
  {
    "id": "work-highlight-gallery-manage-photo",
    "title": "Manage Photo — Work Highlight Gallery",
    "category": "Galleries",
    "parent": "Work Highlight Gallery",
    "hierarchy": [
      "Gallery Management",
      "Work Highlight Gallery",
      "Manage Photo"
    ],
    "description": "Edit captions, reorder photo albums, adjust permissions, or remove obsolete files. (Inside Work Highlight Gallery)",
    "keywords": [
      "manage photo",
      "work highlight gallery",
      "photo action",
      "card",
      "manage",
      "photo",
      "work",
      "highlight",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "work-highlight-gallery"
    },
    "iconName": "Settings",
    "badge": "Photo Action",
    "theme": "emerald"
  },
  {
    "id": "work-highlight-gallery-upload-photo",
    "title": "Upload Photo — Work Highlight Gallery",
    "category": "Galleries",
    "parent": "Work Highlight Gallery",
    "hierarchy": [
      "Gallery Management",
      "Work Highlight Gallery",
      "Upload Photo"
    ],
    "description": "Bulk upload media files, drag-and-drop batch archives, and synchronize to cloud storage. (Inside Work Highlight Gallery)",
    "keywords": [
      "upload photo",
      "work highlight gallery",
      "photo action",
      "card",
      "upload",
      "photo",
      "work",
      "highlight",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "work-highlight-gallery"
    },
    "iconName": "Cloud",
    "badge": "Photo Action",
    "theme": "violet"
  },
  {
    "id": "gal-success-story-gallery",
    "title": "Success Story Gallery",
    "category": "Galleries",
    "parent": "Gallery Management Control",
    "hierarchy": [
      "Gallery Management",
      "Success Story Gallery"
    ],
    "description": "Photos celebrating resolved cybercrime cases, recovered fraud funds, and victim relief.",
    "keywords": [
      "success story gallery",
      "gallery",
      "photos",
      "albums",
      "media",
      "pictures",
      "images",
      "add photo",
      "upload photo",
      "manage photo",
      "view photo",
      "success",
      "story",
      "gallery management control"
    ],
    "target": {
      "scope": "management",
      "view": "success-story-gallery"
    },
    "iconName": "Image",
    "badge": "Gallery",
    "theme": "blue"
  },
  {
    "id": "success-story-gallery-add-photo",
    "title": "Add Photo — Success Story Gallery",
    "category": "Galleries",
    "parent": "Success Story Gallery",
    "hierarchy": [
      "Gallery Management",
      "Success Story Gallery",
      "Add Photo"
    ],
    "description": "Add new high-resolution photographs, metadata tags, and captions to the gallery. (Inside Success Story Gallery)",
    "keywords": [
      "add photo",
      "success story gallery",
      "photo action",
      "card",
      "add",
      "photo",
      "success",
      "story",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "success-story-gallery"
    },
    "iconName": "Zap",
    "badge": "Photo Action",
    "theme": "blue"
  },
  {
    "id": "success-story-gallery-view-photo",
    "title": "View Photo — Success Story Gallery",
    "category": "Galleries",
    "parent": "Success Story Gallery",
    "hierarchy": [
      "Gallery Management",
      "Success Story Gallery",
      "View Photo"
    ],
    "description": "Browse and inspect all stored pictures in full-screen gallery view mode. (Inside Success Story Gallery)",
    "keywords": [
      "view photo",
      "success story gallery",
      "photo action",
      "card",
      "view",
      "photo",
      "success",
      "story",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "success-story-gallery"
    },
    "iconName": "Eye",
    "badge": "Photo Action",
    "theme": "indigo"
  },
  {
    "id": "success-story-gallery-manage-photo",
    "title": "Manage Photo — Success Story Gallery",
    "category": "Galleries",
    "parent": "Success Story Gallery",
    "hierarchy": [
      "Gallery Management",
      "Success Story Gallery",
      "Manage Photo"
    ],
    "description": "Edit captions, reorder photo albums, adjust permissions, or remove obsolete files. (Inside Success Story Gallery)",
    "keywords": [
      "manage photo",
      "success story gallery",
      "photo action",
      "card",
      "manage",
      "photo",
      "success",
      "story",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "success-story-gallery"
    },
    "iconName": "Settings",
    "badge": "Photo Action",
    "theme": "emerald"
  },
  {
    "id": "success-story-gallery-upload-photo",
    "title": "Upload Photo — Success Story Gallery",
    "category": "Galleries",
    "parent": "Success Story Gallery",
    "hierarchy": [
      "Gallery Management",
      "Success Story Gallery",
      "Upload Photo"
    ],
    "description": "Bulk upload media files, drag-and-drop batch archives, and synchronize to cloud storage. (Inside Success Story Gallery)",
    "keywords": [
      "upload photo",
      "success story gallery",
      "photo action",
      "card",
      "upload",
      "photo",
      "success",
      "story",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "success-story-gallery"
    },
    "iconName": "Cloud",
    "badge": "Photo Action",
    "theme": "violet"
  },
  {
    "id": "gal-workplace-gallery",
    "title": "Workplace Gallery",
    "category": "Galleries",
    "parent": "Gallery Management Control",
    "hierarchy": [
      "Gallery Management",
      "Workplace Gallery"
    ],
    "description": "Photos of the modern forensic laboratory, cyber control room, and headquarters facilities.",
    "keywords": [
      "workplace gallery",
      "gallery",
      "photos",
      "albums",
      "media",
      "pictures",
      "images",
      "add photo",
      "upload photo",
      "manage photo",
      "view photo",
      "workplace",
      "gallery management control"
    ],
    "target": {
      "scope": "management",
      "view": "workplace-gallery"
    },
    "iconName": "Image",
    "badge": "Gallery",
    "theme": "blue"
  },
  {
    "id": "workplace-gallery-add-photo",
    "title": "Add Photo — Workplace Gallery",
    "category": "Galleries",
    "parent": "Workplace Gallery",
    "hierarchy": [
      "Gallery Management",
      "Workplace Gallery",
      "Add Photo"
    ],
    "description": "Add new high-resolution photographs, metadata tags, and captions to the gallery. (Inside Workplace Gallery)",
    "keywords": [
      "add photo",
      "workplace gallery",
      "photo action",
      "card",
      "add",
      "photo",
      "workplace",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "workplace-gallery"
    },
    "iconName": "Zap",
    "badge": "Photo Action",
    "theme": "blue"
  },
  {
    "id": "workplace-gallery-view-photo",
    "title": "View Photo — Workplace Gallery",
    "category": "Galleries",
    "parent": "Workplace Gallery",
    "hierarchy": [
      "Gallery Management",
      "Workplace Gallery",
      "View Photo"
    ],
    "description": "Browse and inspect all stored pictures in full-screen gallery view mode. (Inside Workplace Gallery)",
    "keywords": [
      "view photo",
      "workplace gallery",
      "photo action",
      "card",
      "view",
      "photo",
      "workplace",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "workplace-gallery"
    },
    "iconName": "Eye",
    "badge": "Photo Action",
    "theme": "indigo"
  },
  {
    "id": "workplace-gallery-manage-photo",
    "title": "Manage Photo — Workplace Gallery",
    "category": "Galleries",
    "parent": "Workplace Gallery",
    "hierarchy": [
      "Gallery Management",
      "Workplace Gallery",
      "Manage Photo"
    ],
    "description": "Edit captions, reorder photo albums, adjust permissions, or remove obsolete files. (Inside Workplace Gallery)",
    "keywords": [
      "manage photo",
      "workplace gallery",
      "photo action",
      "card",
      "manage",
      "photo",
      "workplace",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "workplace-gallery"
    },
    "iconName": "Settings",
    "badge": "Photo Action",
    "theme": "emerald"
  },
  {
    "id": "workplace-gallery-upload-photo",
    "title": "Upload Photo — Workplace Gallery",
    "category": "Galleries",
    "parent": "Workplace Gallery",
    "hierarchy": [
      "Gallery Management",
      "Workplace Gallery",
      "Upload Photo"
    ],
    "description": "Bulk upload media files, drag-and-drop batch archives, and synchronize to cloud storage. (Inside Workplace Gallery)",
    "keywords": [
      "upload photo",
      "workplace gallery",
      "photo action",
      "card",
      "upload",
      "photo",
      "workplace",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "workplace-gallery"
    },
    "iconName": "Cloud",
    "badge": "Photo Action",
    "theme": "violet"
  },
  {
    "id": "gal-seminar-workshop-gallery",
    "title": "Seminar & Workshop Gallery",
    "category": "Galleries",
    "parent": "Gallery Management Control",
    "hierarchy": [
      "Gallery Management",
      "Seminar & Workshop Gallery"
    ],
    "description": "Photos from knowledge-sharing seminars, hands-on masterclasses, and executive briefings.",
    "keywords": [
      "seminar & workshop gallery",
      "gallery",
      "photos",
      "albums",
      "media",
      "pictures",
      "images",
      "add photo",
      "upload photo",
      "manage photo",
      "view photo",
      "seminar",
      "workshop",
      "gallery management control"
    ],
    "target": {
      "scope": "management",
      "view": "seminar-workshop-gallery"
    },
    "iconName": "Image",
    "badge": "Gallery",
    "theme": "blue"
  },
  {
    "id": "seminar-workshop-gallery-add-photo",
    "title": "Add Photo — Seminar & Workshop Gallery",
    "category": "Galleries",
    "parent": "Seminar & Workshop Gallery",
    "hierarchy": [
      "Gallery Management",
      "Seminar & Workshop Gallery",
      "Add Photo"
    ],
    "description": "Add new high-resolution photographs, metadata tags, and captions to the gallery. (Inside Seminar & Workshop Gallery)",
    "keywords": [
      "add photo",
      "seminar & workshop gallery",
      "photo action",
      "card",
      "add",
      "photo",
      "seminar",
      "workshop",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "seminar-workshop-gallery"
    },
    "iconName": "Zap",
    "badge": "Photo Action",
    "theme": "blue"
  },
  {
    "id": "seminar-workshop-gallery-view-photo",
    "title": "View Photo — Seminar & Workshop Gallery",
    "category": "Galleries",
    "parent": "Seminar & Workshop Gallery",
    "hierarchy": [
      "Gallery Management",
      "Seminar & Workshop Gallery",
      "View Photo"
    ],
    "description": "Browse and inspect all stored pictures in full-screen gallery view mode. (Inside Seminar & Workshop Gallery)",
    "keywords": [
      "view photo",
      "seminar & workshop gallery",
      "photo action",
      "card",
      "view",
      "photo",
      "seminar",
      "workshop",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "seminar-workshop-gallery"
    },
    "iconName": "Eye",
    "badge": "Photo Action",
    "theme": "indigo"
  },
  {
    "id": "seminar-workshop-gallery-manage-photo",
    "title": "Manage Photo — Seminar & Workshop Gallery",
    "category": "Galleries",
    "parent": "Seminar & Workshop Gallery",
    "hierarchy": [
      "Gallery Management",
      "Seminar & Workshop Gallery",
      "Manage Photo"
    ],
    "description": "Edit captions, reorder photo albums, adjust permissions, or remove obsolete files. (Inside Seminar & Workshop Gallery)",
    "keywords": [
      "manage photo",
      "seminar & workshop gallery",
      "photo action",
      "card",
      "manage",
      "photo",
      "seminar",
      "workshop",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "seminar-workshop-gallery"
    },
    "iconName": "Settings",
    "badge": "Photo Action",
    "theme": "emerald"
  },
  {
    "id": "seminar-workshop-gallery-upload-photo",
    "title": "Upload Photo — Seminar & Workshop Gallery",
    "category": "Galleries",
    "parent": "Seminar & Workshop Gallery",
    "hierarchy": [
      "Gallery Management",
      "Seminar & Workshop Gallery",
      "Upload Photo"
    ],
    "description": "Bulk upload media files, drag-and-drop batch archives, and synchronize to cloud storage. (Inside Seminar & Workshop Gallery)",
    "keywords": [
      "upload photo",
      "seminar & workshop gallery",
      "photo action",
      "card",
      "upload",
      "photo",
      "seminar",
      "workshop",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "seminar-workshop-gallery"
    },
    "iconName": "Cloud",
    "badge": "Photo Action",
    "theme": "violet"
  },
  {
    "id": "gal-cyber-awareness-gallery",
    "title": "Cyber Awareness Gallery",
    "category": "Galleries",
    "parent": "Gallery Management Control",
    "hierarchy": [
      "Gallery Management",
      "Cyber Awareness Gallery"
    ],
    "description": "Photos from public cyber hygiene drives, school outreach campaigns, and awareness seminars.",
    "keywords": [
      "cyber awareness gallery",
      "gallery",
      "photos",
      "albums",
      "media",
      "pictures",
      "images",
      "add photo",
      "upload photo",
      "manage photo",
      "view photo",
      "cyber",
      "awareness",
      "gallery management control"
    ],
    "target": {
      "scope": "management",
      "view": "cyber-awareness-gallery"
    },
    "iconName": "Image",
    "badge": "Gallery",
    "theme": "blue"
  },
  {
    "id": "cyber-awareness-gallery-add-photo",
    "title": "Add Photo — Cyber Awareness Gallery",
    "category": "Galleries",
    "parent": "Cyber Awareness Gallery",
    "hierarchy": [
      "Gallery Management",
      "Cyber Awareness Gallery",
      "Add Photo"
    ],
    "description": "Add new high-resolution photographs, metadata tags, and captions to the gallery. (Inside Cyber Awareness Gallery)",
    "keywords": [
      "add photo",
      "cyber awareness gallery",
      "photo action",
      "card",
      "add",
      "photo",
      "cyber",
      "awareness",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "cyber-awareness-gallery"
    },
    "iconName": "Zap",
    "badge": "Photo Action",
    "theme": "blue"
  },
  {
    "id": "cyber-awareness-gallery-view-photo",
    "title": "View Photo — Cyber Awareness Gallery",
    "category": "Galleries",
    "parent": "Cyber Awareness Gallery",
    "hierarchy": [
      "Gallery Management",
      "Cyber Awareness Gallery",
      "View Photo"
    ],
    "description": "Browse and inspect all stored pictures in full-screen gallery view mode. (Inside Cyber Awareness Gallery)",
    "keywords": [
      "view photo",
      "cyber awareness gallery",
      "photo action",
      "card",
      "view",
      "photo",
      "cyber",
      "awareness",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "cyber-awareness-gallery"
    },
    "iconName": "Eye",
    "badge": "Photo Action",
    "theme": "indigo"
  },
  {
    "id": "cyber-awareness-gallery-manage-photo",
    "title": "Manage Photo — Cyber Awareness Gallery",
    "category": "Galleries",
    "parent": "Cyber Awareness Gallery",
    "hierarchy": [
      "Gallery Management",
      "Cyber Awareness Gallery",
      "Manage Photo"
    ],
    "description": "Edit captions, reorder photo albums, adjust permissions, or remove obsolete files. (Inside Cyber Awareness Gallery)",
    "keywords": [
      "manage photo",
      "cyber awareness gallery",
      "photo action",
      "card",
      "manage",
      "photo",
      "cyber",
      "awareness",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "cyber-awareness-gallery"
    },
    "iconName": "Settings",
    "badge": "Photo Action",
    "theme": "emerald"
  },
  {
    "id": "cyber-awareness-gallery-upload-photo",
    "title": "Upload Photo — Cyber Awareness Gallery",
    "category": "Galleries",
    "parent": "Cyber Awareness Gallery",
    "hierarchy": [
      "Gallery Management",
      "Cyber Awareness Gallery",
      "Upload Photo"
    ],
    "description": "Bulk upload media files, drag-and-drop batch archives, and synchronize to cloud storage. (Inside Cyber Awareness Gallery)",
    "keywords": [
      "upload photo",
      "cyber awareness gallery",
      "photo action",
      "card",
      "upload",
      "photo",
      "cyber",
      "awareness",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "cyber-awareness-gallery"
    },
    "iconName": "Cloud",
    "badge": "Photo Action",
    "theme": "violet"
  },
  {
    "id": "gal-office-culture-gallery",
    "title": "Office Culture Gallery",
    "category": "Galleries",
    "parent": "Gallery Management Control",
    "hierarchy": [
      "Gallery Management",
      "Office Culture Gallery"
    ],
    "description": "Photos capturing the dynamic, collaborative team culture and esprit de corps at CRCCF.",
    "keywords": [
      "office culture gallery",
      "gallery",
      "photos",
      "albums",
      "media",
      "pictures",
      "images",
      "add photo",
      "upload photo",
      "manage photo",
      "view photo",
      "office",
      "culture",
      "gallery management control"
    ],
    "target": {
      "scope": "management",
      "view": "office-culture-gallery"
    },
    "iconName": "Image",
    "badge": "Gallery",
    "theme": "blue"
  },
  {
    "id": "office-culture-gallery-add-photo",
    "title": "Add Photo — Office Culture Gallery",
    "category": "Galleries",
    "parent": "Office Culture Gallery",
    "hierarchy": [
      "Gallery Management",
      "Office Culture Gallery",
      "Add Photo"
    ],
    "description": "Add new high-resolution photographs, metadata tags, and captions to the gallery. (Inside Office Culture Gallery)",
    "keywords": [
      "add photo",
      "office culture gallery",
      "photo action",
      "card",
      "add",
      "photo",
      "office",
      "culture",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "office-culture-gallery"
    },
    "iconName": "Zap",
    "badge": "Photo Action",
    "theme": "blue"
  },
  {
    "id": "office-culture-gallery-view-photo",
    "title": "View Photo — Office Culture Gallery",
    "category": "Galleries",
    "parent": "Office Culture Gallery",
    "hierarchy": [
      "Gallery Management",
      "Office Culture Gallery",
      "View Photo"
    ],
    "description": "Browse and inspect all stored pictures in full-screen gallery view mode. (Inside Office Culture Gallery)",
    "keywords": [
      "view photo",
      "office culture gallery",
      "photo action",
      "card",
      "view",
      "photo",
      "office",
      "culture",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "office-culture-gallery"
    },
    "iconName": "Eye",
    "badge": "Photo Action",
    "theme": "indigo"
  },
  {
    "id": "office-culture-gallery-manage-photo",
    "title": "Manage Photo — Office Culture Gallery",
    "category": "Galleries",
    "parent": "Office Culture Gallery",
    "hierarchy": [
      "Gallery Management",
      "Office Culture Gallery",
      "Manage Photo"
    ],
    "description": "Edit captions, reorder photo albums, adjust permissions, or remove obsolete files. (Inside Office Culture Gallery)",
    "keywords": [
      "manage photo",
      "office culture gallery",
      "photo action",
      "card",
      "manage",
      "photo",
      "office",
      "culture",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "office-culture-gallery"
    },
    "iconName": "Settings",
    "badge": "Photo Action",
    "theme": "emerald"
  },
  {
    "id": "office-culture-gallery-upload-photo",
    "title": "Upload Photo — Office Culture Gallery",
    "category": "Galleries",
    "parent": "Office Culture Gallery",
    "hierarchy": [
      "Gallery Management",
      "Office Culture Gallery",
      "Upload Photo"
    ],
    "description": "Bulk upload media files, drag-and-drop batch archives, and synchronize to cloud storage. (Inside Office Culture Gallery)",
    "keywords": [
      "upload photo",
      "office culture gallery",
      "photo action",
      "card",
      "upload",
      "photo",
      "office",
      "culture",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "office-culture-gallery"
    },
    "iconName": "Cloud",
    "badge": "Photo Action",
    "theme": "violet"
  },
  {
    "id": "gal-award-recognition-gallery",
    "title": "Award & Recognition Gallery",
    "category": "Galleries",
    "parent": "Gallery Management Control",
    "hierarchy": [
      "Gallery Management",
      "Award & Recognition Gallery"
    ],
    "description": "Photos from national award ceremonies, presidential medals, and officer citations.",
    "keywords": [
      "award & recognition gallery",
      "gallery",
      "photos",
      "albums",
      "media",
      "pictures",
      "images",
      "add photo",
      "upload photo",
      "manage photo",
      "view photo",
      "award",
      "recognition",
      "gallery management control"
    ],
    "target": {
      "scope": "management",
      "view": "award-recognition-gallery"
    },
    "iconName": "Image",
    "badge": "Gallery",
    "theme": "blue"
  },
  {
    "id": "award-recognition-gallery-add-photo",
    "title": "Add Photo — Award & Recognition Gallery",
    "category": "Galleries",
    "parent": "Award & Recognition Gallery",
    "hierarchy": [
      "Gallery Management",
      "Award & Recognition Gallery",
      "Add Photo"
    ],
    "description": "Add new high-resolution photographs, metadata tags, and captions to the gallery. (Inside Award & Recognition Gallery)",
    "keywords": [
      "add photo",
      "award & recognition gallery",
      "photo action",
      "card",
      "add",
      "photo",
      "award",
      "recognition",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "award-recognition-gallery"
    },
    "iconName": "Zap",
    "badge": "Photo Action",
    "theme": "blue"
  },
  {
    "id": "award-recognition-gallery-view-photo",
    "title": "View Photo — Award & Recognition Gallery",
    "category": "Galleries",
    "parent": "Award & Recognition Gallery",
    "hierarchy": [
      "Gallery Management",
      "Award & Recognition Gallery",
      "View Photo"
    ],
    "description": "Browse and inspect all stored pictures in full-screen gallery view mode. (Inside Award & Recognition Gallery)",
    "keywords": [
      "view photo",
      "award & recognition gallery",
      "photo action",
      "card",
      "view",
      "photo",
      "award",
      "recognition",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "award-recognition-gallery"
    },
    "iconName": "Eye",
    "badge": "Photo Action",
    "theme": "indigo"
  },
  {
    "id": "award-recognition-gallery-manage-photo",
    "title": "Manage Photo — Award & Recognition Gallery",
    "category": "Galleries",
    "parent": "Award & Recognition Gallery",
    "hierarchy": [
      "Gallery Management",
      "Award & Recognition Gallery",
      "Manage Photo"
    ],
    "description": "Edit captions, reorder photo albums, adjust permissions, or remove obsolete files. (Inside Award & Recognition Gallery)",
    "keywords": [
      "manage photo",
      "award & recognition gallery",
      "photo action",
      "card",
      "manage",
      "photo",
      "award",
      "recognition",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "award-recognition-gallery"
    },
    "iconName": "Settings",
    "badge": "Photo Action",
    "theme": "emerald"
  },
  {
    "id": "award-recognition-gallery-upload-photo",
    "title": "Upload Photo — Award & Recognition Gallery",
    "category": "Galleries",
    "parent": "Award & Recognition Gallery",
    "hierarchy": [
      "Gallery Management",
      "Award & Recognition Gallery",
      "Upload Photo"
    ],
    "description": "Bulk upload media files, drag-and-drop batch archives, and synchronize to cloud storage. (Inside Award & Recognition Gallery)",
    "keywords": [
      "upload photo",
      "award & recognition gallery",
      "photo action",
      "card",
      "upload",
      "photo",
      "award",
      "recognition",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "award-recognition-gallery"
    },
    "iconName": "Cloud",
    "badge": "Photo Action",
    "theme": "violet"
  },
  {
    "id": "gal-product-launch-gallery",
    "title": "Product Launch Gallery",
    "category": "Galleries",
    "parent": "Gallery Management Control",
    "hierarchy": [
      "Gallery Management",
      "Product Launch Gallery"
    ],
    "description": "Photos unveiling new digital forensic tools, mobile reporting apps, and security patches.",
    "keywords": [
      "product launch gallery",
      "gallery",
      "photos",
      "albums",
      "media",
      "pictures",
      "images",
      "add photo",
      "upload photo",
      "manage photo",
      "view photo",
      "product",
      "launch",
      "gallery management control"
    ],
    "target": {
      "scope": "management",
      "view": "product-launch-gallery"
    },
    "iconName": "Image",
    "badge": "Gallery",
    "theme": "blue"
  },
  {
    "id": "product-launch-gallery-add-photo",
    "title": "Add Photo — Product Launch Gallery",
    "category": "Galleries",
    "parent": "Product Launch Gallery",
    "hierarchy": [
      "Gallery Management",
      "Product Launch Gallery",
      "Add Photo"
    ],
    "description": "Add new high-resolution photographs, metadata tags, and captions to the gallery. (Inside Product Launch Gallery)",
    "keywords": [
      "add photo",
      "product launch gallery",
      "photo action",
      "card",
      "add",
      "photo",
      "product",
      "launch",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "product-launch-gallery"
    },
    "iconName": "Zap",
    "badge": "Photo Action",
    "theme": "blue"
  },
  {
    "id": "product-launch-gallery-view-photo",
    "title": "View Photo — Product Launch Gallery",
    "category": "Galleries",
    "parent": "Product Launch Gallery",
    "hierarchy": [
      "Gallery Management",
      "Product Launch Gallery",
      "View Photo"
    ],
    "description": "Browse and inspect all stored pictures in full-screen gallery view mode. (Inside Product Launch Gallery)",
    "keywords": [
      "view photo",
      "product launch gallery",
      "photo action",
      "card",
      "view",
      "photo",
      "product",
      "launch",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "product-launch-gallery"
    },
    "iconName": "Eye",
    "badge": "Photo Action",
    "theme": "indigo"
  },
  {
    "id": "product-launch-gallery-manage-photo",
    "title": "Manage Photo — Product Launch Gallery",
    "category": "Galleries",
    "parent": "Product Launch Gallery",
    "hierarchy": [
      "Gallery Management",
      "Product Launch Gallery",
      "Manage Photo"
    ],
    "description": "Edit captions, reorder photo albums, adjust permissions, or remove obsolete files. (Inside Product Launch Gallery)",
    "keywords": [
      "manage photo",
      "product launch gallery",
      "photo action",
      "card",
      "manage",
      "photo",
      "product",
      "launch",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "product-launch-gallery"
    },
    "iconName": "Settings",
    "badge": "Photo Action",
    "theme": "emerald"
  },
  {
    "id": "product-launch-gallery-upload-photo",
    "title": "Upload Photo — Product Launch Gallery",
    "category": "Galleries",
    "parent": "Product Launch Gallery",
    "hierarchy": [
      "Gallery Management",
      "Product Launch Gallery",
      "Upload Photo"
    ],
    "description": "Bulk upload media files, drag-and-drop batch archives, and synchronize to cloud storage. (Inside Product Launch Gallery)",
    "keywords": [
      "upload photo",
      "product launch gallery",
      "photo action",
      "card",
      "upload",
      "photo",
      "product",
      "launch",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "product-launch-gallery"
    },
    "iconName": "Cloud",
    "badge": "Photo Action",
    "theme": "violet"
  },
  {
    "id": "gal-team-moment-gallery",
    "title": "Team Moment Gallery",
    "category": "Galleries",
    "parent": "Gallery Management Control",
    "hierarchy": [
      "Gallery Management",
      "Team Moment Gallery"
    ],
    "description": "Candid snapshots, team retreats, group camaraderie, and morale-building activities.",
    "keywords": [
      "team moment gallery",
      "gallery",
      "photos",
      "albums",
      "media",
      "pictures",
      "images",
      "add photo",
      "upload photo",
      "manage photo",
      "view photo",
      "team",
      "moment",
      "gallery management control"
    ],
    "target": {
      "scope": "management",
      "view": "team-moment-gallery"
    },
    "iconName": "Image",
    "badge": "Gallery",
    "theme": "blue"
  },
  {
    "id": "team-moment-gallery-add-photo",
    "title": "Add Photo — Team Moment Gallery",
    "category": "Galleries",
    "parent": "Team Moment Gallery",
    "hierarchy": [
      "Gallery Management",
      "Team Moment Gallery",
      "Add Photo"
    ],
    "description": "Add new high-resolution photographs, metadata tags, and captions to the gallery. (Inside Team Moment Gallery)",
    "keywords": [
      "add photo",
      "team moment gallery",
      "photo action",
      "card",
      "add",
      "photo",
      "team",
      "moment",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "team-moment-gallery"
    },
    "iconName": "Zap",
    "badge": "Photo Action",
    "theme": "blue"
  },
  {
    "id": "team-moment-gallery-view-photo",
    "title": "View Photo — Team Moment Gallery",
    "category": "Galleries",
    "parent": "Team Moment Gallery",
    "hierarchy": [
      "Gallery Management",
      "Team Moment Gallery",
      "View Photo"
    ],
    "description": "Browse and inspect all stored pictures in full-screen gallery view mode. (Inside Team Moment Gallery)",
    "keywords": [
      "view photo",
      "team moment gallery",
      "photo action",
      "card",
      "view",
      "photo",
      "team",
      "moment",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "team-moment-gallery"
    },
    "iconName": "Eye",
    "badge": "Photo Action",
    "theme": "indigo"
  },
  {
    "id": "team-moment-gallery-manage-photo",
    "title": "Manage Photo — Team Moment Gallery",
    "category": "Galleries",
    "parent": "Team Moment Gallery",
    "hierarchy": [
      "Gallery Management",
      "Team Moment Gallery",
      "Manage Photo"
    ],
    "description": "Edit captions, reorder photo albums, adjust permissions, or remove obsolete files. (Inside Team Moment Gallery)",
    "keywords": [
      "manage photo",
      "team moment gallery",
      "photo action",
      "card",
      "manage",
      "photo",
      "team",
      "moment",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "team-moment-gallery"
    },
    "iconName": "Settings",
    "badge": "Photo Action",
    "theme": "emerald"
  },
  {
    "id": "team-moment-gallery-upload-photo",
    "title": "Upload Photo — Team Moment Gallery",
    "category": "Galleries",
    "parent": "Team Moment Gallery",
    "hierarchy": [
      "Gallery Management",
      "Team Moment Gallery",
      "Upload Photo"
    ],
    "description": "Bulk upload media files, drag-and-drop batch archives, and synchronize to cloud storage. (Inside Team Moment Gallery)",
    "keywords": [
      "upload photo",
      "team moment gallery",
      "photo action",
      "card",
      "upload",
      "photo",
      "team",
      "moment",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "team-moment-gallery"
    },
    "iconName": "Cloud",
    "badge": "Photo Action",
    "theme": "violet"
  },
  {
    "id": "gal-media-press-release",
    "title": "Media & Press Release",
    "category": "Galleries",
    "parent": "Gallery Management Control",
    "hierarchy": [
      "Gallery Management",
      "Media & Press Release"
    ],
    "description": "Photos from press conferences, media interviews, television broadcasts, and news coverages.",
    "keywords": [
      "media & press release",
      "gallery",
      "photos",
      "albums",
      "media",
      "pictures",
      "images",
      "add photo",
      "upload photo",
      "manage photo",
      "view photo",
      "press",
      "release",
      "gallery management control"
    ],
    "target": {
      "scope": "management",
      "view": "media-press-release"
    },
    "iconName": "Image",
    "badge": "Gallery",
    "theme": "blue"
  },
  {
    "id": "media-press-release-add-photo",
    "title": "Add Photo — Media & Press Release",
    "category": "Galleries",
    "parent": "Media & Press Release",
    "hierarchy": [
      "Gallery Management",
      "Media & Press Release",
      "Add Photo"
    ],
    "description": "Add new high-resolution photographs, metadata tags, and captions to the gallery. (Inside Media & Press Release)",
    "keywords": [
      "add photo",
      "media & press release",
      "photo action",
      "card",
      "add",
      "photo",
      "media",
      "press",
      "release"
    ],
    "target": {
      "scope": "management",
      "view": "media-press-release"
    },
    "iconName": "Zap",
    "badge": "Photo Action",
    "theme": "blue"
  },
  {
    "id": "media-press-release-view-photo",
    "title": "View Photo — Media & Press Release",
    "category": "Galleries",
    "parent": "Media & Press Release",
    "hierarchy": [
      "Gallery Management",
      "Media & Press Release",
      "View Photo"
    ],
    "description": "Browse and inspect all stored pictures in full-screen gallery view mode. (Inside Media & Press Release)",
    "keywords": [
      "view photo",
      "media & press release",
      "photo action",
      "card",
      "view",
      "photo",
      "media",
      "press",
      "release"
    ],
    "target": {
      "scope": "management",
      "view": "media-press-release"
    },
    "iconName": "Eye",
    "badge": "Photo Action",
    "theme": "indigo"
  },
  {
    "id": "media-press-release-manage-photo",
    "title": "Manage Photo — Media & Press Release",
    "category": "Galleries",
    "parent": "Media & Press Release",
    "hierarchy": [
      "Gallery Management",
      "Media & Press Release",
      "Manage Photo"
    ],
    "description": "Edit captions, reorder photo albums, adjust permissions, or remove obsolete files. (Inside Media & Press Release)",
    "keywords": [
      "manage photo",
      "media & press release",
      "photo action",
      "card",
      "manage",
      "photo",
      "media",
      "press",
      "release"
    ],
    "target": {
      "scope": "management",
      "view": "media-press-release"
    },
    "iconName": "Settings",
    "badge": "Photo Action",
    "theme": "emerald"
  },
  {
    "id": "media-press-release-upload-photo",
    "title": "Upload Photo — Media & Press Release",
    "category": "Galleries",
    "parent": "Media & Press Release",
    "hierarchy": [
      "Gallery Management",
      "Media & Press Release",
      "Upload Photo"
    ],
    "description": "Bulk upload media files, drag-and-drop batch archives, and synchronize to cloud storage. (Inside Media & Press Release)",
    "keywords": [
      "upload photo",
      "media & press release",
      "photo action",
      "card",
      "upload",
      "photo",
      "media",
      "press",
      "release"
    ],
    "target": {
      "scope": "management",
      "view": "media-press-release"
    },
    "iconName": "Cloud",
    "badge": "Photo Action",
    "theme": "violet"
  },
  {
    "id": "gal-student-activities-gallery",
    "title": "Student Activities Gallery",
    "category": "Galleries",
    "parent": "Gallery Management Control",
    "hierarchy": [
      "Gallery Management",
      "Student Activities Gallery"
    ],
    "description": "Photos of extracurricular cyber quiz challenges, youth summits, and student initiatives.",
    "keywords": [
      "student activities gallery",
      "gallery",
      "photos",
      "albums",
      "media",
      "pictures",
      "images",
      "add photo",
      "upload photo",
      "manage photo",
      "view photo",
      "student",
      "activities",
      "gallery management control"
    ],
    "target": {
      "scope": "management",
      "view": "student-activities-gallery"
    },
    "iconName": "Image",
    "badge": "Gallery",
    "theme": "blue"
  },
  {
    "id": "student-activities-gallery-add-photo",
    "title": "Add Photo — Student Activities Gallery",
    "category": "Galleries",
    "parent": "Student Activities Gallery",
    "hierarchy": [
      "Gallery Management",
      "Student Activities Gallery",
      "Add Photo"
    ],
    "description": "Add new high-resolution photographs, metadata tags, and captions to the gallery. (Inside Student Activities Gallery)",
    "keywords": [
      "add photo",
      "student activities gallery",
      "photo action",
      "card",
      "add",
      "photo",
      "student",
      "activities",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "student-activities-gallery"
    },
    "iconName": "Zap",
    "badge": "Photo Action",
    "theme": "blue"
  },
  {
    "id": "student-activities-gallery-view-photo",
    "title": "View Photo — Student Activities Gallery",
    "category": "Galleries",
    "parent": "Student Activities Gallery",
    "hierarchy": [
      "Gallery Management",
      "Student Activities Gallery",
      "View Photo"
    ],
    "description": "Browse and inspect all stored pictures in full-screen gallery view mode. (Inside Student Activities Gallery)",
    "keywords": [
      "view photo",
      "student activities gallery",
      "photo action",
      "card",
      "view",
      "photo",
      "student",
      "activities",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "student-activities-gallery"
    },
    "iconName": "Eye",
    "badge": "Photo Action",
    "theme": "indigo"
  },
  {
    "id": "student-activities-gallery-manage-photo",
    "title": "Manage Photo — Student Activities Gallery",
    "category": "Galleries",
    "parent": "Student Activities Gallery",
    "hierarchy": [
      "Gallery Management",
      "Student Activities Gallery",
      "Manage Photo"
    ],
    "description": "Edit captions, reorder photo albums, adjust permissions, or remove obsolete files. (Inside Student Activities Gallery)",
    "keywords": [
      "manage photo",
      "student activities gallery",
      "photo action",
      "card",
      "manage",
      "photo",
      "student",
      "activities",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "student-activities-gallery"
    },
    "iconName": "Settings",
    "badge": "Photo Action",
    "theme": "emerald"
  },
  {
    "id": "student-activities-gallery-upload-photo",
    "title": "Upload Photo — Student Activities Gallery",
    "category": "Galleries",
    "parent": "Student Activities Gallery",
    "hierarchy": [
      "Gallery Management",
      "Student Activities Gallery",
      "Upload Photo"
    ],
    "description": "Bulk upload media files, drag-and-drop batch archives, and synchronize to cloud storage. (Inside Student Activities Gallery)",
    "keywords": [
      "upload photo",
      "student activities gallery",
      "photo action",
      "card",
      "upload",
      "photo",
      "student",
      "activities",
      "gallery"
    ],
    "target": {
      "scope": "management",
      "view": "student-activities-gallery"
    },
    "iconName": "Cloud",
    "badge": "Photo Action",
    "theme": "violet"
  },
  {
    "title": "Student Verification",
    "category": "Verification Services",
    "parent": "Document Verification Department",
    "hierarchy": [
      "Document Verification",
      "Student Verification"
    ],
    "description": "Verify student credentials and records.",
    "keywords": [
      "verification",
      "document",
      "certificate",
      "authenticate",
      "verify",
      "validation",
      "student",
      "enrollment",
      "roll number",
      "admit card",
      "college id",
      "university",
      "document verification department"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Verification",
    "theme": "blue",
    "id": "student-verification"
  },
  {
    "title": "Employee Verification",
    "category": "Verification Services",
    "parent": "Document Verification Department",
    "hierarchy": [
      "Document Verification",
      "Employee Verification"
    ],
    "description": "Verify employee backgrounds and IDs.",
    "keywords": [
      "verification",
      "document",
      "certificate",
      "authenticate",
      "verify",
      "validation",
      "employee",
      "staff",
      "police officer",
      "appointment letter",
      "badge verification",
      "document verification department"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Verification",
    "theme": "indigo",
    "id": "employee-verification"
  },
  {
    "title": "Visitor Appointment Verification",
    "category": "Verification Services",
    "parent": "Document Verification Department",
    "hierarchy": [
      "Document Verification",
      "Visitor Appointment Verification"
    ],
    "description": "Verify visitor appointments and access.",
    "keywords": [
      "verification",
      "document",
      "certificate",
      "authenticate",
      "verify",
      "validation",
      "visitor",
      "appointment",
      "document verification department"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Verification",
    "theme": "emerald",
    "id": "visitor-appointment-verification"
  },
  {
    "title": "Gate Pass Verification",
    "category": "Verification Services",
    "parent": "Document Verification Department",
    "hierarchy": [
      "Document Verification",
      "Gate Pass Verification"
    ],
    "description": "Verify facility gate passes and entry.",
    "keywords": [
      "verification",
      "document",
      "certificate",
      "authenticate",
      "verify",
      "validation",
      "gate",
      "pass",
      "document verification department"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Verification",
    "theme": "violet",
    "id": "gate-pass-verification"
  },
  {
    "title": "License Verification",
    "category": "Verification Services",
    "parent": "Document Verification Department",
    "hierarchy": [
      "Document Verification",
      "License Verification"
    ],
    "description": "Verify professional licenses and certs.",
    "keywords": [
      "verification",
      "document",
      "certificate",
      "authenticate",
      "verify",
      "validation",
      "driving license",
      "software license",
      "commercial license",
      "permit",
      "authorization",
      "license",
      "document verification department"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Verification",
    "theme": "rose",
    "id": "license-verification"
  },
  {
    "title": "Organization Verification",
    "category": "Verification Services",
    "parent": "Document Verification Department",
    "hierarchy": [
      "Document Verification",
      "Organization Verification"
    ],
    "description": "Verify organizational identity.",
    "keywords": [
      "verification",
      "document",
      "certificate",
      "authenticate",
      "verify",
      "validation",
      "organization",
      "document verification department"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Verification",
    "theme": "amber",
    "id": "organization-verification"
  },
  {
    "title": "Agreement Verification",
    "category": "Verification Services",
    "parent": "Document Verification Department",
    "hierarchy": [
      "Document Verification",
      "Agreement Verification"
    ],
    "description": "Verify legal agreements and contracts.",
    "keywords": [
      "verification",
      "document",
      "certificate",
      "authenticate",
      "verify",
      "validation",
      "agreement",
      "document verification department"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Verification",
    "theme": "cyan",
    "id": "agreement-verification"
  },
  {
    "title": "Web Domain Verification",
    "category": "Verification Services",
    "parent": "Document Verification Department",
    "hierarchy": [
      "Document Verification",
      "Web Domain Verification"
    ],
    "description": "Verify associated web domains.",
    "keywords": [
      "verification",
      "document",
      "certificate",
      "authenticate",
      "verify",
      "validation",
      "web",
      "domain",
      "document verification department"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Verification",
    "theme": "blue",
    "id": "web-domain-verification"
  },
  {
    "title": "Membership Verification",
    "category": "Verification Services",
    "parent": "Document Verification Department",
    "hierarchy": [
      "Document Verification",
      "Membership Verification"
    ],
    "description": "Verify member statuses and subscriptions.",
    "keywords": [
      "verification",
      "document",
      "certificate",
      "authenticate",
      "verify",
      "validation",
      "membership",
      "document verification department"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Verification",
    "theme": "indigo",
    "id": "membership-verification"
  },
  {
    "title": "Notice Verification",
    "category": "Verification Services",
    "parent": "Document Verification Department",
    "hierarchy": [
      "Document Verification",
      "Notice Verification"
    ],
    "description": "Verify official notices and circulars.",
    "keywords": [
      "verification",
      "document",
      "certificate",
      "authenticate",
      "verify",
      "validation",
      "notice",
      "document verification department"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Verification",
    "theme": "emerald",
    "id": "notice-verification"
  },
  {
    "title": "Invitation Verification",
    "category": "Verification Services",
    "parent": "Document Verification Department",
    "hierarchy": [
      "Document Verification",
      "Invitation Verification"
    ],
    "description": "Verify event and official invitations.",
    "keywords": [
      "verification",
      "document",
      "certificate",
      "authenticate",
      "verify",
      "validation",
      "invitation",
      "document verification department"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Verification",
    "theme": "violet",
    "id": "invitation-verification"
  },
  {
    "title": "Certificate Verification",
    "category": "Verification Services",
    "parent": "Document Verification Department",
    "hierarchy": [
      "Document Verification",
      "Certificate Verification"
    ],
    "description": "Verify issued certificates and awards.",
    "keywords": [
      "verification",
      "document",
      "certificate",
      "authenticate",
      "verify",
      "validation",
      "marksheet",
      "diploma",
      "degree",
      "10th",
      "12th",
      "educational credentials",
      "accreditation",
      "document verification department"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Verification",
    "theme": "rose",
    "id": "certificate-verification"
  },
  {
    "title": "ID Card Verification",
    "category": "Verification Services",
    "parent": "Document Verification Department",
    "hierarchy": [
      "Document Verification",
      "ID Card Verification"
    ],
    "description": "Verify digital and physical ID cards.",
    "keywords": [
      "verification",
      "document",
      "certificate",
      "authenticate",
      "verify",
      "validation",
      "aadhar",
      "aadhaar",
      "pan card",
      "voter id",
      "driving license",
      "passport",
      "national id",
      "kyc",
      "government id",
      "identity proof",
      "card",
      "document verification department"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Verification",
    "theme": "amber",
    "id": "id-card-verification"
  },
  {
    "title": "Authorization Verification",
    "category": "Verification Services",
    "parent": "Document Verification Department",
    "hierarchy": [
      "Document Verification",
      "Authorization Verification"
    ],
    "description": "Verify authorization and access roles.",
    "keywords": [
      "verification",
      "document",
      "certificate",
      "authenticate",
      "verify",
      "validation",
      "authorization",
      "document verification department"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Verification",
    "theme": "cyan",
    "id": "authorization-verification"
  },
  {
    "title": "Digital Signature Verification",
    "category": "Verification Services",
    "parent": "Document Verification Department",
    "hierarchy": [
      "Document Verification",
      "Digital Signature Verification"
    ],
    "description": "Verify cryptographic digital signatures.",
    "keywords": [
      "verification",
      "document",
      "certificate",
      "authenticate",
      "verify",
      "validation",
      "digital signature",
      "dsc",
      "crypto token",
      "pki",
      "e-sign",
      "token",
      "digital",
      "signature",
      "document verification department"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Verification",
    "theme": "blue",
    "id": "digital-signature-verification"
  },
  {
    "title": "Email Address Verification",
    "category": "Verification Services",
    "parent": "Document Verification Department",
    "hierarchy": [
      "Document Verification",
      "Email Address Verification"
    ],
    "description": "Verify official email communications.",
    "keywords": [
      "verification",
      "document",
      "certificate",
      "authenticate",
      "verify",
      "validation",
      "email",
      "address",
      "document verification department"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Verification",
    "theme": "indigo",
    "id": "email-address-verification"
  },
  {
    "title": "Mobile Number Verification",
    "category": "Verification Services",
    "parent": "Document Verification Department",
    "hierarchy": [
      "Document Verification",
      "Mobile Number Verification"
    ],
    "description": "Verify user contact numbers.",
    "keywords": [
      "verification",
      "document",
      "certificate",
      "authenticate",
      "verify",
      "validation",
      "mobile",
      "number",
      "document verification department"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Verification",
    "theme": "emerald",
    "id": "mobile-number-verification"
  },
  {
    "title": "Social Media Verification",
    "category": "Verification Services",
    "parent": "Document Verification Department",
    "hierarchy": [
      "Document Verification",
      "Social Media Verification"
    ],
    "description": "Verify official social handles.",
    "keywords": [
      "verification",
      "document",
      "certificate",
      "authenticate",
      "verify",
      "validation",
      "social",
      "media",
      "document verification department"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Verification",
    "theme": "violet",
    "id": "social-media-verification"
  },
  {
    "title": "Software Product Verification",
    "category": "Verification Services",
    "parent": "Document Verification Department",
    "hierarchy": [
      "Document Verification",
      "Software Product Verification"
    ],
    "description": "Verify software authenticity and licenses.",
    "keywords": [
      "verification",
      "document",
      "certificate",
      "authenticate",
      "verify",
      "validation",
      "software",
      "product",
      "document verification department"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Verification",
    "theme": "rose",
    "id": "software-product-verification"
  },
  {
    "title": "Material Verification",
    "category": "Verification Services",
    "parent": "Document Verification Department",
    "hierarchy": [
      "Document Verification",
      "Material Verification"
    ],
    "description": "Verify physical and digital materials.",
    "keywords": [
      "verification",
      "document",
      "certificate",
      "authenticate",
      "verify",
      "validation",
      "material",
      "document verification department"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Verification",
    "theme": "amber",
    "id": "material-verification"
  },
  {
    "title": "Book Verification",
    "category": "Verification Services",
    "parent": "Document Verification Department",
    "hierarchy": [
      "Document Verification",
      "Book Verification"
    ],
    "description": "Verify publications and books.",
    "keywords": [
      "verification",
      "document",
      "certificate",
      "authenticate",
      "verify",
      "validation",
      "book",
      "document verification department"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Verification",
    "theme": "cyan",
    "id": "book-verification"
  },
  {
    "title": "Report Verification",
    "category": "Verification Services",
    "parent": "Document Verification Department",
    "hierarchy": [
      "Document Verification",
      "Report Verification"
    ],
    "description": "Verify case and analytics reports.",
    "keywords": [
      "verification",
      "document",
      "certificate",
      "authenticate",
      "verify",
      "validation",
      "fir copy",
      "cyber complaint report",
      "forensic report",
      "police report",
      "investigation report",
      "report",
      "document verification department"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Verification",
    "theme": "blue",
    "id": "report-verification"
  },
  {
    "title": "Letter Verification",
    "category": "Verification Services",
    "parent": "Document Verification Department",
    "hierarchy": [
      "Document Verification",
      "Letter Verification"
    ],
    "description": "Verify official letters and correspondence.",
    "keywords": [
      "verification",
      "document",
      "certificate",
      "authenticate",
      "verify",
      "validation",
      "letter",
      "document verification department"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Verification",
    "theme": "indigo",
    "id": "letter-verification"
  },
  {
    "title": "Volunteer Verification",
    "category": "Verification Services",
    "parent": "Document Verification Department",
    "hierarchy": [
      "Document Verification",
      "Volunteer Verification"
    ],
    "description": "Verify volunteer credentials and history.",
    "keywords": [
      "verification",
      "document",
      "certificate",
      "authenticate",
      "verify",
      "validation",
      "volunteer",
      "document verification department"
    ],
    "target": {
      "scope": "management",
      "view": "doc-verification"
    },
    "iconName": "FileCheck",
    "badge": "Verification",
    "theme": "emerald",
    "id": "volunteer-verification"
  },
  {
    "title": "10th Certificate Application Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "10th Certificate Application Form"
    ],
    "description": "Manage 10th-grade certificate applications.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "10th",
      "certificate",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "indigo",
    "id": "10th-certificate-application-form"
  },
  {
    "title": "12th Certificate Application Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "12th Certificate Application Form"
    ],
    "description": "Manage 12th-grade certificate applications.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "12th",
      "certificate",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "emerald",
    "id": "12th-certificate-application-form"
  },
  {
    "title": "ITI Certificate Application Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "ITI Certificate Application Form"
    ],
    "description": "Manage ITI certificate applications.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "iti",
      "certificate",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "blue",
    "id": "iti-certificate-application-form"
  },
  {
    "title": "Diploma Certificate Application Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Diploma Certificate Application Form"
    ],
    "description": "Manage diploma certificate applications.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "diploma",
      "certificate",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "violet",
    "id": "diploma-certificate-application-form"
  },
  {
    "title": "Degree Certificate Application Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Degree Certificate Application Form"
    ],
    "description": "Manage degree certificate applications.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "degree",
      "certificate",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "rose",
    "id": "degree-certificate-application-form"
  },
  {
    "title": "Master Degree Certificate Application Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Master Degree Certificate Application Form"
    ],
    "description": "Manage master degree applications.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "master",
      "degree",
      "certificate",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "cyan",
    "id": "master-degree-certificate-application-form"
  },
  {
    "title": "Seminar Registration Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Seminar Registration Form"
    ],
    "description": "Manage registrations for upcoming seminars.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "seminar",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "amber",
    "id": "seminar-registration-form"
  },
  {
    "title": "Webinar Registration Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Webinar Registration Form"
    ],
    "description": "Manage online webinar registrations.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "webinar",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "indigo",
    "id": "webinar-registration-form"
  },
  {
    "title": "Workshop Registration Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Workshop Registration Form"
    ],
    "description": "Manage hands-on workshop registrations.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "workshop",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "emerald",
    "id": "workshop-registration-form"
  },
  {
    "title": "Institutional Training Request Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Institutional Training Request Form"
    ],
    "description": "Manage training requests from institutions.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "institutional",
      "training",
      "request",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "blue",
    "id": "institutional-training-request-form"
  },
  {
    "title": "Cyber Awareness Program Request Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Cyber Awareness Program Request Form"
    ],
    "description": "Manage cyber awareness program requests.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "cyber",
      "awareness",
      "program",
      "request",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "violet",
    "id": "cyber-awareness-program-request-form"
  },
  {
    "title": "Collaboration Application Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Collaboration Application Form"
    ],
    "description": "Manage institutional and corporate collaborations.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "collaboration",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "rose",
    "id": "collaboration-application-form"
  },
  {
    "title": "Partnership Application Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Partnership Application Form"
    ],
    "description": "Manage strategic partnership requests.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "partnership",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "cyan",
    "id": "partnership-application-form"
  },
  {
    "title": "Researcher Application Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Researcher Application Form"
    ],
    "description": "Manage applications for research positions.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "researcher",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "amber",
    "id": "researcher-application-form"
  },
  {
    "title": "Freelance / Consultant Application Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Freelance / Consultant Application Form"
    ],
    "description": "Manage freelance and consultant applications.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "freelance",
      "consultant",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "indigo",
    "id": "freelance-consultant-application-form"
  },
  {
    "title": "Volunteer Application Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Volunteer Application Form"
    ],
    "description": "Manage volunteer program sign-ups.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "volunteer",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "emerald",
    "id": "volunteer-application-form"
  },
  {
    "title": "Job Application Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Job Application Form"
    ],
    "description": "Manage standard job applications.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "job",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "blue",
    "id": "job-application-form"
  },
  {
    "title": "Event Participation Application Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Event Participation Application Form"
    ],
    "description": "Manage general event participation.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "event",
      "participation",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "violet",
    "id": "event-participation-application-form"
  },
  {
    "title": "Duplicate ID Card Application Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Duplicate ID Card Application Form"
    ],
    "description": "Manage requests for duplicate ID cards.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "duplicate",
      "card",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "rose",
    "id": "duplicate-id-card-application-form"
  },
  {
    "title": "Duplicate Certificate Application Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Duplicate Certificate Application Form"
    ],
    "description": "Manage requests for duplicate certificates.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "duplicate",
      "certificate",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "cyan",
    "id": "duplicate-certificate-application-form"
  },
  {
    "title": "Software Product Purchase Request Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Software Product Purchase Request Form"
    ],
    "description": "Manage software product purchase inquiries.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "software",
      "product",
      "purchase",
      "request",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "amber",
    "id": "software-product-purchase-request-form"
  },
  {
    "title": "Software Product Demo Request Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Software Product Demo Request Form"
    ],
    "description": "Manage requests for software demos.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "software",
      "product",
      "demo",
      "request",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "indigo",
    "id": "software-product-demo-request-form"
  },
  {
    "title": "Technical Support Request Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Technical Support Request Form"
    ],
    "description": "Manage technical support and help tickets.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "technical",
      "support",
      "request",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "emerald",
    "id": "technical-support-request-form"
  },
  {
    "title": "Membership Application Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Membership Application Form"
    ],
    "description": "Manage new membership applications.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "membership",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "blue",
    "id": "membership-application-form"
  },
  {
    "title": "Membership Renewal Application Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Membership Renewal Application Form"
    ],
    "description": "Manage membership renewal requests.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "membership",
      "renewal",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "violet",
    "id": "membership-renewal-application-form"
  },
  {
    "title": "Feedback & Suggestion Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Feedback & Suggestion Form"
    ],
    "description": "Manage user feedback and suggestions.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "feedback",
      "suggestion",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "rose",
    "id": "feedback-suggestion-form"
  },
  {
    "title": "Grievance Submission Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Grievance Submission Form"
    ],
    "description": "Manage formal grievances and disputes.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "grievance",
      "submission",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "cyan",
    "id": "grievance-submission-form"
  },
  {
    "title": "Complaint Submission Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Complaint Submission Form"
    ],
    "description": "Manage formal complaints.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "complaint",
      "submission",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "amber",
    "id": "complaint-submission-form"
  },
  {
    "title": "Sponsorship Application Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "Sponsorship Application Form"
    ],
    "description": "Manage sponsorship and funding requests.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "sponsorship",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "indigo",
    "id": "sponsorship-application-form"
  },
  {
    "title": "General Inquiry / Information Request Form",
    "category": "Online Applications",
    "parent": "Online Application Portal",
    "hierarchy": [
      "Online Applications",
      "General Inquiry / Information Request Form"
    ],
    "description": "Manage general inquiries and information requests.",
    "keywords": [
      "application",
      "online form",
      "register",
      "apply",
      "registration",
      "portal",
      "general",
      "inquiry",
      "information",
      "request",
      "form",
      "online application portal",
      "application form"
    ],
    "target": {
      "scope": "management",
      "view": "online-app"
    },
    "iconName": "FileText",
    "badge": "Application Form",
    "theme": "emerald",
    "id": "general-inquiry-information-request-form"
  },
  {
    "title": "Hero Control",
    "category": "Management Controls",
    "parent": "Home Management Control",
    "hierarchy": [
      "Home Management Control",
      "Hero Control"
    ],
    "description": "Manage the main hero banner and slider configurations.",
    "keywords": [
      "home management control",
      "home",
      "section",
      "card",
      "hero",
      "control",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "home"
    },
    "iconName": "Home",
    "badge": "Section Card",
    "theme": "blue",
    "id": "hero-control"
  },
  {
    "title": "Who We Are Control",
    "category": "Management Controls",
    "parent": "Home Management Control",
    "hierarchy": [
      "Home Management Control",
      "Who We Are Control"
    ],
    "description": "Configure the about us section content and text.",
    "keywords": [
      "home management control",
      "home",
      "section",
      "card",
      "who",
      "are",
      "control",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "home"
    },
    "iconName": "Home",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "who-we-are-control"
  },
  {
    "title": "Introduction Control",
    "category": "Management Controls",
    "parent": "Home Management Control",
    "hierarchy": [
      "Home Management Control",
      "Introduction Control"
    ],
    "description": "Manage the introduction text and associated visuals.",
    "keywords": [
      "home management control",
      "home",
      "section",
      "card",
      "introduction",
      "control",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "home"
    },
    "iconName": "Home",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "introduction-control"
  },
  {
    "title": "What We Do Control",
    "category": "Management Controls",
    "parent": "Home Management Control",
    "hierarchy": [
      "Home Management Control",
      "What We Do Control"
    ],
    "description": "Edit the services and core operations section.",
    "keywords": [
      "home management control",
      "home",
      "section",
      "card",
      "what",
      "control",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "home"
    },
    "iconName": "Home",
    "badge": "Section Card",
    "theme": "violet",
    "id": "what-we-do-control"
  },
  {
    "title": "Our Programs Control",
    "category": "Management Controls",
    "parent": "Home Management Control",
    "hierarchy": [
      "Home Management Control",
      "Our Programs Control"
    ],
    "description": "Manage program offerings and detailed information.",
    "keywords": [
      "home management control",
      "home",
      "section",
      "card",
      "our",
      "programs",
      "control",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "home"
    },
    "iconName": "Home",
    "badge": "Section Card",
    "theme": "rose",
    "id": "our-programs-control"
  },
  {
    "title": "Our Tech Stack Control",
    "category": "Management Controls",
    "parent": "Home Management Control",
    "hierarchy": [
      "Home Management Control",
      "Our Tech Stack Control"
    ],
    "description": "Configure technology stack information and icons.",
    "keywords": [
      "home management control",
      "home",
      "section",
      "card",
      "our",
      "tech",
      "stack",
      "control",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "home"
    },
    "iconName": "Home",
    "badge": "Section Card",
    "theme": "amber",
    "id": "our-tech-stack-control"
  },
  {
    "title": "Project and Portfolio Control",
    "category": "Management Controls",
    "parent": "Home Management Control",
    "hierarchy": [
      "Home Management Control",
      "Project and Portfolio Control"
    ],
    "description": "Update showcased projects, case studies, and portfolios.",
    "keywords": [
      "home management control",
      "home",
      "section",
      "card",
      "project",
      "and",
      "portfolio",
      "control",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "home"
    },
    "iconName": "Home",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "project-and-portfolio-control"
  },
  {
    "title": "Internship Programs Control",
    "category": "Management Controls",
    "parent": "Home Management Control",
    "hierarchy": [
      "Home Management Control",
      "Internship Programs Control"
    ],
    "description": "Manage internship postings and associated details.",
    "keywords": [
      "home management control",
      "home",
      "section",
      "card",
      "internship",
      "programs",
      "control",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "home"
    },
    "iconName": "Home",
    "badge": "Section Card",
    "theme": "blue",
    "id": "internship-programs-control"
  },
  {
    "title": "What We Provide Control",
    "category": "Management Controls",
    "parent": "Home Management Control",
    "hierarchy": [
      "Home Management Control",
      "What We Provide Control"
    ],
    "description": "Configure provisions, resources, and benefits details.",
    "keywords": [
      "home management control",
      "home",
      "section",
      "card",
      "what",
      "provide",
      "control",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "home"
    },
    "iconName": "Home",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "what-we-provide-control"
  },
  {
    "title": "Why Choose Us Control",
    "category": "Management Controls",
    "parent": "Home Management Control",
    "hierarchy": [
      "Home Management Control",
      "Why Choose Us Control"
    ],
    "description": "Edit the competitive advantage and USP sections.",
    "keywords": [
      "home management control",
      "home",
      "section",
      "card",
      "why",
      "choose",
      "control",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "home"
    },
    "iconName": "Home",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "why-choose-us-control"
  },
  {
    "title": "Join Our Team Control",
    "category": "Management Controls",
    "parent": "Home Management Control",
    "hierarchy": [
      "Home Management Control",
      "Join Our Team Control"
    ],
    "description": "Manage career postings and hiring sections.",
    "keywords": [
      "home management control",
      "home",
      "section",
      "card",
      "join",
      "our",
      "team",
      "control",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "home"
    },
    "iconName": "Home",
    "badge": "Section Card",
    "theme": "violet",
    "id": "join-our-team-control"
  },
  {
    "title": "Digital Footprint Control",
    "category": "Management Controls",
    "parent": "Home Management Control",
    "hierarchy": [
      "Home Management Control",
      "Digital Footprint Control"
    ],
    "description": "Update digital presence, media, and social links.",
    "keywords": [
      "home management control",
      "home",
      "section",
      "card",
      "digital",
      "footprint",
      "control",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "home"
    },
    "iconName": "Home",
    "badge": "Section Card",
    "theme": "rose",
    "id": "digital-footprint-control"
  },
  {
    "title": "Testimonials Control",
    "category": "Management Controls",
    "parent": "Home Management Control",
    "hierarchy": [
      "Home Management Control",
      "Testimonials Control"
    ],
    "description": "Manage user reviews, quotes, and testimonials.",
    "keywords": [
      "home management control",
      "home",
      "section",
      "card",
      "testimonials",
      "control",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "home"
    },
    "iconName": "Home",
    "badge": "Section Card",
    "theme": "amber",
    "id": "testimonials-control"
  },
  {
    "title": "Meaning Behind Our Name",
    "category": "Management Controls",
    "parent": "About Us Management Control",
    "hierarchy": [
      "About Us Management Control",
      "Meaning Behind Our Name"
    ],
    "description": "Configure the story and meaning behind the organization name.",
    "keywords": [
      "about us management control",
      "about-us",
      "section",
      "card",
      "meaning",
      "behind",
      "our",
      "name",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "about-us"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "blue",
    "id": "meaning-behind-our-name"
  },
  {
    "title": "Our Gallery",
    "category": "Management Controls",
    "parent": "About Us Management Control",
    "hierarchy": [
      "About Us Management Control",
      "Our Gallery"
    ],
    "description": "Manage images, videos, and media in the about gallery.",
    "keywords": [
      "about us management control",
      "about-us",
      "section",
      "card",
      "our",
      "gallery",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "about-us"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "our-gallery"
  },
  {
    "title": "Identity",
    "category": "Management Controls",
    "parent": "About Us Management Control",
    "hierarchy": [
      "About Us Management Control",
      "Identity"
    ],
    "description": "Manage corporate identity, branding, and core values.",
    "keywords": [
      "about us management control",
      "about-us",
      "section",
      "card",
      "identity",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "about-us"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "identity"
  },
  {
    "title": "Introduction",
    "category": "Management Controls",
    "parent": "About Us Management Control",
    "hierarchy": [
      "About Us Management Control",
      "Introduction"
    ],
    "description": "Update the main introductory text about the organization.",
    "keywords": [
      "about us management control",
      "about-us",
      "section",
      "card",
      "introduction",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "about-us"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "violet",
    "id": "introduction"
  },
  {
    "title": "What We Do",
    "category": "Management Controls",
    "parent": "About Us Management Control",
    "hierarchy": [
      "About Us Management Control",
      "What We Do"
    ],
    "description": "Edit the description of operations and core services.",
    "keywords": [
      "about us management control",
      "about-us",
      "section",
      "card",
      "what",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "about-us"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "rose",
    "id": "what-we-do"
  },
  {
    "title": "Mission & Vision",
    "category": "Management Controls",
    "parent": "About Us Management Control",
    "hierarchy": [
      "About Us Management Control",
      "Mission & Vision"
    ],
    "description": "Configure the mission and vision statements.",
    "keywords": [
      "about us management control",
      "about-us",
      "section",
      "card",
      "mission",
      "vision",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "about-us"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "amber",
    "id": "mission-vision"
  },
  {
    "title": "Activity",
    "category": "Management Controls",
    "parent": "About Us Management Control",
    "hierarchy": [
      "About Us Management Control",
      "Activity"
    ],
    "description": "Manage records of organizational activities and events.",
    "keywords": [
      "about us management control",
      "about-us",
      "section",
      "card",
      "activity",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "about-us"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "activity"
  },
  {
    "title": "Purpose",
    "category": "Management Controls",
    "parent": "About Us Management Control",
    "hierarchy": [
      "About Us Management Control",
      "Purpose"
    ],
    "description": "Edit the fundamental purpose and goals of the organization.",
    "keywords": [
      "about us management control",
      "about-us",
      "section",
      "card",
      "purpose",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "about-us"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "blue",
    "id": "purpose"
  },
  {
    "title": "Objective",
    "category": "Management Controls",
    "parent": "About Us Management Control",
    "hierarchy": [
      "About Us Management Control",
      "Objective"
    ],
    "description": "Update short-term and long-term organizational objectives.",
    "keywords": [
      "about us management control",
      "about-us",
      "section",
      "card",
      "objective",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "about-us"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "objective"
  },
  {
    "title": "Achievement",
    "category": "Management Controls",
    "parent": "About Us Management Control",
    "hierarchy": [
      "About Us Management Control",
      "Achievement"
    ],
    "description": "Showcase awards, milestones, and major achievements.",
    "keywords": [
      "about us management control",
      "about-us",
      "section",
      "card",
      "achievement",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "about-us"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "achievement"
  },
  {
    "title": "Legal & Compliance",
    "category": "Management Controls",
    "parent": "About Us Management Control",
    "hierarchy": [
      "About Us Management Control",
      "Legal & Compliance"
    ],
    "description": "Manage legal documentation, compliance, and policies.",
    "keywords": [
      "about us management control",
      "about-us",
      "section",
      "card",
      "legal",
      "compliance",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "about-us"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "violet",
    "id": "legal-compliance"
  },
  {
    "title": "Privacy Policy",
    "category": "Management Controls",
    "parent": "About Us Management Control",
    "hierarchy": [
      "About Us Management Control",
      "Privacy Policy"
    ],
    "description": "Manage privacy policy documentation and data guidelines.",
    "keywords": [
      "about us management control",
      "about-us",
      "section",
      "card",
      "privacy",
      "policy",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "about-us"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "rose",
    "id": "privacy-policy"
  },
  {
    "title": "Terms & Condition",
    "category": "Management Controls",
    "parent": "About Us Management Control",
    "hierarchy": [
      "About Us Management Control",
      "Terms & Condition"
    ],
    "description": "Update terms of service and user agreements.",
    "keywords": [
      "about us management control",
      "about-us",
      "section",
      "card",
      "terms",
      "condition",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "about-us"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "amber",
    "id": "terms-condition"
  },
  {
    "title": "Instruction",
    "category": "Management Controls",
    "parent": "About Us Management Control",
    "hierarchy": [
      "About Us Management Control",
      "Instruction"
    ],
    "description": "Provide step-by-step instructions and user guidelines.",
    "keywords": [
      "about us management control",
      "about-us",
      "section",
      "card",
      "instruction",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "about-us"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "instruction"
  },
  {
    "title": "Legal Disclaimer",
    "category": "Management Controls",
    "parent": "About Us Management Control",
    "hierarchy": [
      "About Us Management Control",
      "Legal Disclaimer"
    ],
    "description": "Configure site-wide legal disclaimers and liability waivers.",
    "keywords": [
      "about us management control",
      "about-us",
      "section",
      "card",
      "legal",
      "disclaimer",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "about-us"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "blue",
    "id": "legal-disclaimer"
  },
  {
    "title": "Copyright",
    "category": "Management Controls",
    "parent": "About Us Management Control",
    "hierarchy": [
      "About Us Management Control",
      "Copyright"
    ],
    "description": "Manage copyright notices and intellectual property details.",
    "keywords": [
      "about us management control",
      "about-us",
      "section",
      "card",
      "copyright",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "about-us"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "copyright"
  },
  {
    "title": "Partnership",
    "category": "Management Controls",
    "parent": "About Us Management Control",
    "hierarchy": [
      "About Us Management Control",
      "Partnership"
    ],
    "description": "Display and manage strategic partnerships and alliances.",
    "keywords": [
      "about us management control",
      "about-us",
      "section",
      "card",
      "partnership",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "about-us"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "partnership"
  },
  {
    "title": "History",
    "category": "Management Controls",
    "parent": "About Us Management Control",
    "hierarchy": [
      "About Us Management Control",
      "History"
    ],
    "description": "Document the historical timeline and founding story.",
    "keywords": [
      "about us management control",
      "about-us",
      "section",
      "card",
      "history",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "about-us"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "violet",
    "id": "history"
  },
  {
    "title": "Legal Identity",
    "category": "Management Controls",
    "parent": "Legal & Compliance Control",
    "hierarchy": [
      "Legal & Compliance Control",
      "Legal Identity"
    ],
    "description": "Manage core legal identity documentation.",
    "keywords": [
      "legal & compliance control",
      "legal-compliance",
      "section",
      "card",
      "legal",
      "identity",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "legal-compliance"
    },
    "iconName": "Scale",
    "badge": "Section Card",
    "theme": "blue",
    "id": "legal-identity"
  },
  {
    "title": "Legal Entity",
    "category": "Management Controls",
    "parent": "Legal & Compliance Control",
    "hierarchy": [
      "Legal & Compliance Control",
      "Legal Entity"
    ],
    "description": "Configure corporate structure and legal entity data.",
    "keywords": [
      "legal & compliance control",
      "legal-compliance",
      "section",
      "card",
      "legal",
      "entity",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "legal-compliance"
    },
    "iconName": "Scale",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "legal-entity"
  },
  {
    "title": "Legal Authorizations & Cyber Licenses",
    "category": "Management Controls",
    "parent": "Legal & Compliance Control",
    "hierarchy": [
      "Legal & Compliance Control",
      "Legal Authorizations & Cyber Licenses"
    ],
    "description": "Track cyber operations licenses and authorizations.",
    "keywords": [
      "legal & compliance control",
      "legal-compliance",
      "section",
      "card",
      "legal",
      "authorizations",
      "cyber",
      "licenses",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "legal-compliance"
    },
    "iconName": "Scale",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "legal-authorizations-cyber-licenses"
  },
  {
    "title": "Legal Right & Operational Limits",
    "category": "Management Controls",
    "parent": "Legal & Compliance Control",
    "hierarchy": [
      "Legal & Compliance Control",
      "Legal Right & Operational Limits"
    ],
    "description": "Define operational boundaries and legal rights.",
    "keywords": [
      "legal & compliance control",
      "legal-compliance",
      "section",
      "card",
      "legal",
      "right",
      "operational",
      "limits",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "legal-compliance"
    },
    "iconName": "Scale",
    "badge": "Section Card",
    "theme": "violet",
    "id": "legal-right-operational-limits"
  },
  {
    "title": "CRCCF Legal Rights",
    "category": "Management Controls",
    "parent": "Legal & Compliance Control",
    "hierarchy": [
      "Legal & Compliance Control",
      "CRCCF Legal Rights"
    ],
    "description": "Manage organization-specific legal rights.",
    "keywords": [
      "legal & compliance control",
      "legal-compliance",
      "section",
      "card",
      "crccf",
      "legal",
      "rights",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "legal-compliance"
    },
    "iconName": "Scale",
    "badge": "Section Card",
    "theme": "rose",
    "id": "crccf-legal-rights"
  },
  {
    "title": "Legal & Ethical Compliance",
    "category": "Management Controls",
    "parent": "Legal & Compliance Control",
    "hierarchy": [
      "Legal & Compliance Control",
      "Legal & Ethical Compliance"
    ],
    "description": "Monitor alignment with ethical and legal standards.",
    "keywords": [
      "legal & compliance control",
      "legal-compliance",
      "section",
      "card",
      "legal",
      "ethical",
      "compliance",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "legal-compliance"
    },
    "iconName": "Scale",
    "badge": "Section Card",
    "theme": "amber",
    "id": "legal-ethical-compliance"
  },
  {
    "title": "Cyber Crime Investigation Approval",
    "category": "Management Controls",
    "parent": "Legal & Compliance Control",
    "hierarchy": [
      "Legal & Compliance Control",
      "Cyber Crime Investigation Approval"
    ],
    "description": "Handle approvals for cyber crime investigations.",
    "keywords": [
      "legal & compliance control",
      "legal-compliance",
      "section",
      "card",
      "cyber",
      "crime",
      "investigation",
      "approval",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "legal-compliance"
    },
    "iconName": "Scale",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "cyber-crime-investigation-approval"
  },
  {
    "title": "Cyber Investigation Capacity",
    "category": "Management Controls",
    "parent": "Legal & Compliance Control",
    "hierarchy": [
      "Legal & Compliance Control",
      "Cyber Investigation Capacity"
    ],
    "description": "Manage investigation scope and capacities.",
    "keywords": [
      "legal & compliance control",
      "legal-compliance",
      "section",
      "card",
      "cyber",
      "investigation",
      "capacity",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "legal-compliance"
    },
    "iconName": "Scale",
    "badge": "Section Card",
    "theme": "blue",
    "id": "cyber-investigation-capacity"
  },
  {
    "title": "Digital Investigation Infrastructure",
    "category": "Management Controls",
    "parent": "Legal & Compliance Control",
    "hierarchy": [
      "Legal & Compliance Control",
      "Digital Investigation Infrastructure"
    ],
    "description": "Configure infrastructure used for digital investigations.",
    "keywords": [
      "legal & compliance control",
      "legal-compliance",
      "section",
      "card",
      "digital",
      "investigation",
      "infrastructure",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "legal-compliance"
    },
    "iconName": "Scale",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "digital-investigation-infrastructure"
  },
  {
    "title": "Role in Cybercrime Investigation",
    "category": "Management Controls",
    "parent": "Legal & Compliance Control",
    "hierarchy": [
      "Legal & Compliance Control",
      "Role in Cybercrime Investigation"
    ],
    "description": "Define the roles and responsibilities in investigations.",
    "keywords": [
      "legal & compliance control",
      "legal-compliance",
      "section",
      "card",
      "role",
      "cybercrime",
      "investigation",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "legal-compliance"
    },
    "iconName": "Scale",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "role-in-cybercrime-investigation"
  },
  {
    "title": "Investigation Scope & Social Responsibility",
    "category": "Management Controls",
    "parent": "Legal & Compliance Control",
    "hierarchy": [
      "Legal & Compliance Control",
      "Investigation Scope & Social Responsibility"
    ],
    "description": "Manage the social impact and scope of investigations.",
    "keywords": [
      "legal & compliance control",
      "legal-compliance",
      "section",
      "card",
      "investigation",
      "scope",
      "social",
      "responsibility",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "legal-compliance"
    },
    "iconName": "Scale",
    "badge": "Section Card",
    "theme": "violet",
    "id": "investigation-scope-social-responsibility"
  },
  {
    "title": "Cyber Investigation Compliance Framework",
    "category": "Management Controls",
    "parent": "Legal & Compliance Control",
    "hierarchy": [
      "Legal & Compliance Control",
      "Cyber Investigation Compliance Framework"
    ],
    "description": "Monitor compliance within investigation protocols.",
    "keywords": [
      "legal & compliance control",
      "legal-compliance",
      "section",
      "card",
      "cyber",
      "investigation",
      "compliance",
      "framework",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "legal-compliance"
    },
    "iconName": "Scale",
    "badge": "Section Card",
    "theme": "rose",
    "id": "cyber-investigation-compliance-framework"
  },
  {
    "title": "Investigation Ethics & Legal Standards",
    "category": "Management Controls",
    "parent": "Legal & Compliance Control",
    "hierarchy": [
      "Legal & Compliance Control",
      "Investigation Ethics & Legal Standards"
    ],
    "description": "Track ethics adherence and legal standards.",
    "keywords": [
      "legal & compliance control",
      "legal-compliance",
      "section",
      "card",
      "investigation",
      "ethics",
      "legal",
      "standards",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "legal-compliance"
    },
    "iconName": "Scale",
    "badge": "Section Card",
    "theme": "amber",
    "id": "investigation-ethics-legal-standards"
  },
  {
    "title": "Cyber Security & Investigation Protocols",
    "category": "Management Controls",
    "parent": "Legal & Compliance Control",
    "hierarchy": [
      "Legal & Compliance Control",
      "Cyber Security & Investigation Protocols"
    ],
    "description": "Configure security protocols for cyber operations.",
    "keywords": [
      "legal & compliance control",
      "legal-compliance",
      "section",
      "card",
      "cyber",
      "security",
      "investigation",
      "protocols",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "legal-compliance"
    },
    "iconName": "Scale",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "cyber-security-investigation-protocols"
  },
  {
    "title": "Digital Security Certification",
    "category": "Management Controls",
    "parent": "Legal & Compliance Control",
    "hierarchy": [
      "Legal & Compliance Control",
      "Digital Security Certification"
    ],
    "description": "Manage organizational digital security certificates.",
    "keywords": [
      "legal & compliance control",
      "legal-compliance",
      "section",
      "card",
      "digital",
      "security",
      "certification",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "legal-compliance"
    },
    "iconName": "Scale",
    "badge": "Section Card",
    "theme": "blue",
    "id": "digital-security-certification"
  },
  {
    "title": "Operational Resources & Team",
    "category": "Management Controls",
    "parent": "Legal & Compliance Control",
    "hierarchy": [
      "Legal & Compliance Control",
      "Operational Resources & Team"
    ],
    "description": "Manage teams and resources allocated for operations.",
    "keywords": [
      "legal & compliance control",
      "legal-compliance",
      "section",
      "card",
      "operational",
      "resources",
      "team",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "legal-compliance"
    },
    "iconName": "Scale",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "operational-resources-team"
  },
  {
    "title": "Cybercrime Response Capabilities",
    "category": "Management Controls",
    "parent": "Legal & Compliance Control",
    "hierarchy": [
      "Legal & Compliance Control",
      "Cybercrime Response Capabilities"
    ],
    "description": "Track incident response and handling capabilities.",
    "keywords": [
      "legal & compliance control",
      "legal-compliance",
      "section",
      "card",
      "cybercrime",
      "response",
      "capabilities",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "legal-compliance"
    },
    "iconName": "Scale",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "cybercrime-response-capabilities"
  },
  {
    "title": "Team, Tool & Tech Capacity",
    "category": "Management Controls",
    "parent": "Legal & Compliance Control",
    "hierarchy": [
      "Legal & Compliance Control",
      "Team, Tool & Tech Capacity"
    ],
    "description": "Manage inventory of tools and technological capacity.",
    "keywords": [
      "legal & compliance control",
      "legal-compliance",
      "section",
      "card",
      "team",
      "tool",
      "tech",
      "capacity",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "legal-compliance"
    },
    "iconName": "Scale",
    "badge": "Section Card",
    "theme": "violet",
    "id": "team-tool-tech-capacity"
  },
  {
    "title": "Compliance with Indian Cyber Laws",
    "category": "Management Controls",
    "parent": "Legal & Compliance Control",
    "hierarchy": [
      "Legal & Compliance Control",
      "Compliance with Indian Cyber Laws"
    ],
    "description": "Ensure alignment with regional Indian cyber laws.",
    "keywords": [
      "legal & compliance control",
      "legal-compliance",
      "section",
      "card",
      "compliance",
      "with",
      "indian",
      "cyber",
      "laws",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "legal-compliance"
    },
    "iconName": "Scale",
    "badge": "Section Card",
    "theme": "rose",
    "id": "compliance-with-indian-cyber-laws"
  },
  {
    "title": "Cyber Law Compliance Standards",
    "category": "Management Controls",
    "parent": "Legal & Compliance Control",
    "hierarchy": [
      "Legal & Compliance Control",
      "Cyber Law Compliance Standards"
    ],
    "description": "Define framework for cyber law standards.",
    "keywords": [
      "legal & compliance control",
      "legal-compliance",
      "section",
      "card",
      "cyber",
      "law",
      "compliance",
      "standards",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "legal-compliance"
    },
    "iconName": "Scale",
    "badge": "Section Card",
    "theme": "amber",
    "id": "cyber-law-compliance-standards"
  },
  {
    "title": "Compliance with Cybercrime Regulation",
    "category": "Management Controls",
    "parent": "Legal & Compliance Control",
    "hierarchy": [
      "Legal & Compliance Control",
      "Compliance with Cybercrime Regulation"
    ],
    "description": "Manage alignment with external cyber regulations.",
    "keywords": [
      "legal & compliance control",
      "legal-compliance",
      "section",
      "card",
      "compliance",
      "with",
      "cybercrime",
      "regulation",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "legal-compliance"
    },
    "iconName": "Scale",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "compliance-with-cybercrime-regulation"
  },
  {
    "title": "Cybercrime Compliance Framework",
    "category": "Management Controls",
    "parent": "Legal & Compliance Control",
    "hierarchy": [
      "Legal & Compliance Control",
      "Cybercrime Compliance Framework"
    ],
    "description": "Configure the overarching compliance framework.",
    "keywords": [
      "legal & compliance control",
      "legal-compliance",
      "section",
      "card",
      "cybercrime",
      "compliance",
      "framework",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "legal-compliance"
    },
    "iconName": "Scale",
    "badge": "Section Card",
    "theme": "blue",
    "id": "cybercrime-compliance-framework"
  },
  {
    "title": "Resource & Report",
    "category": "Management Controls",
    "parent": "Legal & Compliance Control",
    "hierarchy": [
      "Legal & Compliance Control",
      "Resource & Report"
    ],
    "description": "Manage investigation resources and final reports.",
    "keywords": [
      "legal & compliance control",
      "legal-compliance",
      "section",
      "card",
      "resource",
      "report",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "legal-compliance"
    },
    "iconName": "Scale",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "resource-report"
  },
  {
    "title": "Recognized Power & Responsibility",
    "category": "Management Controls",
    "parent": "Legal & Compliance Control",
    "hierarchy": [
      "Legal & Compliance Control",
      "Recognized Power & Responsibility"
    ],
    "description": "Define the recognized powers and authorized responsibilities.",
    "keywords": [
      "legal & compliance control",
      "legal-compliance",
      "section",
      "card",
      "recognized",
      "power",
      "responsibility",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "legal-compliance"
    },
    "iconName": "Scale",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "recognized-power-responsibility"
  },
  {
    "title": "Software and IT Services",
    "category": "Management Controls",
    "parent": "Our Service Management Control",
    "hierarchy": [
      "Our Service Management Control",
      "Software and IT Services"
    ],
    "description": "Manage software development and IT infrastructure services.",
    "keywords": [
      "our service management control",
      "our-service",
      "section",
      "card",
      "software",
      "and",
      "services",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "our-service"
    },
    "iconName": "ShieldCheck",
    "badge": "Section Card",
    "theme": "blue",
    "id": "software-and-it-services"
  },
  {
    "title": "Digital Marketing Services",
    "category": "Management Controls",
    "parent": "Our Service Management Control",
    "hierarchy": [
      "Our Service Management Control",
      "Digital Marketing Services"
    ],
    "description": "Configure digital marketing, SEO, and social media campaigns.",
    "keywords": [
      "our service management control",
      "our-service",
      "section",
      "card",
      "digital",
      "marketing",
      "services",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "our-service"
    },
    "iconName": "ShieldCheck",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "digital-marketing-services"
  },
  {
    "title": "Victim Support Services",
    "category": "Management Controls",
    "parent": "Our Service Management Control",
    "hierarchy": [
      "Our Service Management Control",
      "Victim Support Services"
    ],
    "description": "Manage cybercrime victim support and counseling resources.",
    "keywords": [
      "our service management control",
      "our-service",
      "section",
      "card",
      "victim",
      "support",
      "services",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "our-service"
    },
    "iconName": "ShieldCheck",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "victim-support-services"
  },
  {
    "title": "Legal Info & Doc Support",
    "category": "Management Controls",
    "parent": "Our Service Management Control",
    "hierarchy": [
      "Our Service Management Control",
      "Legal Info & Doc Support"
    ],
    "description": "Update legal information and documentation templates.",
    "keywords": [
      "our service management control",
      "our-service",
      "section",
      "card",
      "legal",
      "info",
      "doc",
      "support",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "our-service"
    },
    "iconName": "ShieldCheck",
    "badge": "Section Card",
    "theme": "violet",
    "id": "legal-info-doc-support"
  },
  {
    "title": "Cyber Security Services",
    "category": "Management Controls",
    "parent": "Our Service Management Control",
    "hierarchy": [
      "Our Service Management Control",
      "Cyber Security Services"
    ],
    "description": "Configure enterprise cyber security and auditing services.",
    "keywords": [
      "our service management control",
      "our-service",
      "section",
      "card",
      "cyber",
      "security",
      "services",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "our-service"
    },
    "iconName": "ShieldCheck",
    "badge": "Section Card",
    "theme": "rose",
    "id": "cyber-security-services"
  },
  {
    "title": "Cyber Investigation Services",
    "category": "Management Controls",
    "parent": "Our Service Management Control",
    "hierarchy": [
      "Our Service Management Control",
      "Cyber Investigation Services"
    ],
    "description": "Manage digital forensics and cyber investigation tools.",
    "keywords": [
      "our service management control",
      "our-service",
      "section",
      "card",
      "cyber",
      "investigation",
      "services",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "our-service"
    },
    "iconName": "ShieldCheck",
    "badge": "Section Card",
    "theme": "amber",
    "id": "cyber-investigation-services"
  },
  {
    "title": "Legal Services",
    "category": "Management Controls",
    "parent": "Our Service Management Control",
    "hierarchy": [
      "Our Service Management Control",
      "Legal Services"
    ],
    "description": "Configure legal counsel and representation services.",
    "keywords": [
      "our service management control",
      "our-service",
      "section",
      "card",
      "legal",
      "services",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "our-service"
    },
    "iconName": "ShieldCheck",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "legal-services"
  },
  {
    "title": "Education Services",
    "category": "Management Controls",
    "parent": "Our Service Management Control",
    "hierarchy": [
      "Our Service Management Control",
      "Education Services"
    ],
    "description": "Manage educational programs and academic resources.",
    "keywords": [
      "our service management control",
      "our-service",
      "section",
      "card",
      "education",
      "services",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "our-service"
    },
    "iconName": "ShieldCheck",
    "badge": "Section Card",
    "theme": "blue",
    "id": "education-services"
  },
  {
    "title": "Training & Internship Services",
    "category": "Management Controls",
    "parent": "Our Service Management Control",
    "hierarchy": [
      "Our Service Management Control",
      "Training & Internship Services"
    ],
    "description": "Configure practical training and internship programs.",
    "keywords": [
      "our service management control",
      "our-service",
      "section",
      "card",
      "training",
      "internship",
      "services",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "our-service"
    },
    "iconName": "ShieldCheck",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "training-internship-services"
  },
  {
    "title": "Placement Services",
    "category": "Management Controls",
    "parent": "Our Service Management Control",
    "hierarchy": [
      "Our Service Management Control",
      "Placement Services"
    ],
    "description": "Manage career placement and recruitment assistance.",
    "keywords": [
      "our service management control",
      "our-service",
      "section",
      "card",
      "placement",
      "services",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "our-service"
    },
    "iconName": "ShieldCheck",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "placement-services"
  },
  {
    "title": "Cyber Awareness Services",
    "category": "Management Controls",
    "parent": "Our Service Management Control",
    "hierarchy": [
      "Our Service Management Control",
      "Cyber Awareness Services"
    ],
    "description": "Configure public cyber awareness and safety campaigns.",
    "keywords": [
      "our service management control",
      "our-service",
      "section",
      "card",
      "cyber",
      "awareness",
      "services",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "our-service"
    },
    "iconName": "ShieldCheck",
    "badge": "Section Card",
    "theme": "violet",
    "id": "cyber-awareness-services"
  },
  {
    "title": "Legal Support",
    "category": "Management Controls",
    "parent": "Our Service Management Control",
    "hierarchy": [
      "Our Service Management Control",
      "Legal Support"
    ],
    "description": "Manage ongoing legal support and advisory services.",
    "keywords": [
      "our service management control",
      "our-service",
      "section",
      "card",
      "legal",
      "support",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "our-service"
    },
    "iconName": "ShieldCheck",
    "badge": "Section Card",
    "theme": "rose",
    "id": "legal-support"
  },
  {
    "title": "Developed Software Products",
    "category": "Management Controls",
    "parent": "Software Product Management Control",
    "hierarchy": [
      "Software Product Management Control",
      "Developed Software Products"
    ],
    "description": "Manage the portfolio of fully developed software products.",
    "keywords": [
      "software product management control",
      "software-product",
      "section",
      "card",
      "developed",
      "software",
      "products",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Section Card",
    "theme": "blue",
    "id": "developed-software-products"
  },
  {
    "title": "Products Under Development",
    "category": "Management Controls",
    "parent": "Software Product Management Control",
    "hierarchy": [
      "Software Product Management Control",
      "Products Under Development"
    ],
    "description": "Track status and details of ongoing software projects.",
    "keywords": [
      "software product management control",
      "software-product",
      "section",
      "card",
      "products",
      "under",
      "development",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "products-under-development"
  },
  {
    "title": "Upcoming Software Innovations",
    "category": "Management Controls",
    "parent": "Software Product Management Control",
    "hierarchy": [
      "Software Product Management Control",
      "Upcoming Software Innovations"
    ],
    "description": "Plan and manage the pipeline for future software innovations.",
    "keywords": [
      "software product management control",
      "software-product",
      "section",
      "card",
      "upcoming",
      "software",
      "innovations",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "upcoming-software-innovations"
  },
  {
    "title": "Cyber Security Software Solutions",
    "category": "Management Controls",
    "parent": "Software Product Management Control",
    "hierarchy": [
      "Software Product Management Control",
      "Cyber Security Software Solutions"
    ],
    "description": "Manage enterprise cyber security product offerings.",
    "keywords": [
      "software product management control",
      "software-product",
      "section",
      "card",
      "cyber",
      "security",
      "software",
      "solutions",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Section Card",
    "theme": "violet",
    "id": "cyber-security-software-solutions"
  },
  {
    "title": "AI & Automation Products",
    "category": "Management Controls",
    "parent": "Software Product Management Control",
    "hierarchy": [
      "Software Product Management Control",
      "AI & Automation Products"
    ],
    "description": "Configure AI-driven and automated software solutions.",
    "keywords": [
      "software product management control",
      "software-product",
      "section",
      "card",
      "automation",
      "products",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Section Card",
    "theme": "rose",
    "id": "ai-automation-products"
  },
  {
    "title": "Mobile Application Products",
    "category": "Management Controls",
    "parent": "Software Product Management Control",
    "hierarchy": [
      "Software Product Management Control",
      "Mobile Application Products"
    ],
    "description": "Manage mobile app deployments across iOS and Android.",
    "keywords": [
      "software product management control",
      "software-product",
      "section",
      "card",
      "mobile",
      "application",
      "products",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Section Card",
    "theme": "amber",
    "id": "mobile-application-products"
  },
  {
    "title": "Web-Based Digital Platforms",
    "category": "Management Controls",
    "parent": "Software Product Management Control",
    "hierarchy": [
      "Software Product Management Control",
      "Web-Based Digital Platforms"
    ],
    "description": "Track and manage web-based tools and digital platforms.",
    "keywords": [
      "software product management control",
      "software-product",
      "section",
      "card",
      "web",
      "based",
      "digital",
      "platforms",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "web-based-digital-platforms"
  },
  {
    "title": "Enterprise Software Solutions",
    "category": "Management Controls",
    "parent": "Software Product Management Control",
    "hierarchy": [
      "Software Product Management Control",
      "Enterprise Software Solutions"
    ],
    "description": "Configure comprehensive enterprise-scale software suites.",
    "keywords": [
      "software product management control",
      "software-product",
      "section",
      "card",
      "enterprise",
      "software",
      "solutions",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Section Card",
    "theme": "blue",
    "id": "enterprise-software-solutions"
  },
  {
    "title": "Educational Technology Products",
    "category": "Management Controls",
    "parent": "Software Product Management Control",
    "hierarchy": [
      "Software Product Management Control",
      "Educational Technology Products"
    ],
    "description": "Manage EdTech products, LMS, and e-learning platforms.",
    "keywords": [
      "software product management control",
      "software-product",
      "section",
      "card",
      "educational",
      "technology",
      "products",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "educational-technology-products"
  },
  {
    "title": "Data Analytics & Reporting Tools",
    "category": "Management Controls",
    "parent": "Software Product Management Control",
    "hierarchy": [
      "Software Product Management Control",
      "Data Analytics & Reporting Tools"
    ],
    "description": "Configure data visualization and analytics reporting tools.",
    "keywords": [
      "software product management control",
      "software-product",
      "section",
      "card",
      "data",
      "analytics",
      "reporting",
      "tools",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "data-analytics-reporting-tools"
  },
  {
    "title": "Cloud-Based Software Solutions",
    "category": "Management Controls",
    "parent": "Software Product Management Control",
    "hierarchy": [
      "Software Product Management Control",
      "Cloud-Based Software Solutions"
    ],
    "description": "Manage SaaS and cloud-hosted product deployments.",
    "keywords": [
      "software product management control",
      "software-product",
      "section",
      "card",
      "cloud",
      "based",
      "software",
      "solutions",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Section Card",
    "theme": "violet",
    "id": "cloud-based-software-solutions"
  },
  {
    "title": "Research & Development Products",
    "category": "Management Controls",
    "parent": "Software Product Management Control",
    "hierarchy": [
      "Software Product Management Control",
      "Research & Development Products"
    ],
    "description": "Track internal R&D software prototypes and tools.",
    "keywords": [
      "software product management control",
      "software-product",
      "section",
      "card",
      "research",
      "development",
      "products",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Section Card",
    "theme": "rose",
    "id": "research-development-products"
  },
  {
    "title": "Cyber Crime Investigation Software",
    "category": "Management Controls",
    "parent": "Software Product Management Control",
    "hierarchy": [
      "Software Product Management Control",
      "Cyber Crime Investigation Software"
    ],
    "description": "Manage specialized software for cyber investigations.",
    "keywords": [
      "software product management control",
      "software-product",
      "section",
      "card",
      "cyber",
      "crime",
      "investigation",
      "software",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Section Card",
    "theme": "amber",
    "id": "cyber-crime-investigation-software"
  },
  {
    "title": "Cyber Security Software",
    "category": "Management Controls",
    "parent": "Software Product Management Control",
    "hierarchy": [
      "Software Product Management Control",
      "Cyber Security Software"
    ],
    "description": "Configure general cyber security and antivirus software.",
    "keywords": [
      "software product management control",
      "software-product",
      "section",
      "card",
      "cyber",
      "security",
      "software",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "cyber-security-software"
  },
  {
    "title": "Cyber Crime Awareness Software",
    "category": "Management Controls",
    "parent": "Software Product Management Control",
    "hierarchy": [
      "Software Product Management Control",
      "Cyber Crime Awareness Software"
    ],
    "description": "Manage tools designed for public cyber awareness.",
    "keywords": [
      "software product management control",
      "software-product",
      "section",
      "card",
      "cyber",
      "crime",
      "awareness",
      "software",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Section Card",
    "theme": "blue",
    "id": "cyber-crime-awareness-software"
  },
  {
    "title": "Cyber Crime Victim Support Software",
    "category": "Management Controls",
    "parent": "Software Product Management Control",
    "hierarchy": [
      "Software Product Management Control",
      "Cyber Crime Victim Support Software"
    ],
    "description": "Configure software portals for victim assistance.",
    "keywords": [
      "software product management control",
      "software-product",
      "section",
      "card",
      "cyber",
      "crime",
      "victim",
      "support",
      "software",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "cyber-crime-victim-support-software"
  },
  {
    "title": "Case Tracking Software",
    "category": "Management Controls",
    "parent": "Software Product Management Control",
    "hierarchy": [
      "Software Product Management Control",
      "Case Tracking Software"
    ],
    "description": "Manage legal and investigation case tracking software.",
    "keywords": [
      "software product management control",
      "software-product",
      "section",
      "card",
      "case",
      "tracking",
      "software",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "case-tracking-software"
  },
  {
    "title": "Cyber Intelligence Software",
    "category": "Management Controls",
    "parent": "Software Product Management Control",
    "hierarchy": [
      "Software Product Management Control",
      "Cyber Intelligence Software"
    ],
    "description": "Configure threat intelligence and OSINT software tools.",
    "keywords": [
      "software product management control",
      "software-product",
      "section",
      "card",
      "cyber",
      "intelligence",
      "software",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Section Card",
    "theme": "violet",
    "id": "cyber-intelligence-software"
  },
  {
    "title": "Digital Forensic Support Tools",
    "category": "Management Controls",
    "parent": "Software Product Management Control",
    "hierarchy": [
      "Software Product Management Control",
      "Digital Forensic Support Tools"
    ],
    "description": "Manage digital forensic extraction and analysis tools.",
    "keywords": [
      "software product management control",
      "software-product",
      "section",
      "card",
      "digital",
      "forensic",
      "support",
      "tools",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Section Card",
    "theme": "rose",
    "id": "digital-forensic-support-tools"
  },
  {
    "title": "Training & Internship Management Software",
    "category": "Management Controls",
    "parent": "Software Product Management Control",
    "hierarchy": [
      "Software Product Management Control",
      "Training & Internship Management Software"
    ],
    "description": "Configure software for managing trainees and interns.",
    "keywords": [
      "software product management control",
      "software-product",
      "section",
      "card",
      "training",
      "internship",
      "management",
      "software",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Section Card",
    "theme": "amber",
    "id": "training-internship-management-software"
  },
  {
    "title": "User Support & Helpdesk Software",
    "category": "Management Controls",
    "parent": "Software Product Management Control",
    "hierarchy": [
      "Software Product Management Control",
      "User Support & Helpdesk Software"
    ],
    "description": "Manage IT helpdesk and customer support ticketing tools.",
    "keywords": [
      "software product management control",
      "software-product",
      "section",
      "card",
      "user",
      "support",
      "helpdesk",
      "software",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "user-support-helpdesk-software"
  },
  {
    "title": "HR & Recruitment Management Software",
    "category": "Management Controls",
    "parent": "Software Product Management Control",
    "hierarchy": [
      "Software Product Management Control",
      "HR & Recruitment Management Software"
    ],
    "description": "Configure HR software, ATS, and employee management tools.",
    "keywords": [
      "software product management control",
      "software-product",
      "section",
      "card",
      "recruitment",
      "management",
      "software",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Section Card",
    "theme": "blue",
    "id": "hr-recruitment-management-software"
  },
  {
    "title": "Police Investigation Tools & Software",
    "category": "Management Controls",
    "parent": "Software Product Management Control",
    "hierarchy": [
      "Software Product Management Control",
      "Police Investigation Tools & Software"
    ],
    "description": "Manage specific software tools provided to law enforcement.",
    "keywords": [
      "software product management control",
      "software-product",
      "section",
      "card",
      "police",
      "investigation",
      "tools",
      "software",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "police-investigation-tools-software"
  },
  {
    "title": "Software Product Overview",
    "category": "Management Controls",
    "parent": "Software Product Management Control",
    "hierarchy": [
      "Software Product Management Control",
      "Software Product Overview"
    ],
    "description": "View high-level analytics and summaries of all software products.",
    "keywords": [
      "software product management control",
      "software-product",
      "section",
      "card",
      "software",
      "product",
      "overview",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "software-product"
    },
    "iconName": "Cpu",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "software-product-overview"
  },
  {
    "title": "Internships",
    "category": "Courses & Training",
    "parent": "Skill Development Management Control",
    "hierarchy": [
      "Skill Development Management Control",
      "Internships"
    ],
    "description": "Manage comprehensive internship programs across multiple disciplines.",
    "keywords": [
      "skill development management control",
      "skill-development",
      "section",
      "card",
      "internships",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "skill-development"
    },
    "iconName": "Award",
    "badge": "Section Card",
    "theme": "blue",
    "id": "internships"
  },
  {
    "title": "Training Programs",
    "category": "Courses & Training",
    "parent": "Skill Development Management Control",
    "hierarchy": [
      "Skill Development Management Control",
      "Training Programs"
    ],
    "description": "Manage specialized training courses and educational programs.",
    "keywords": [
      "skill development management control",
      "skill-development",
      "section",
      "card",
      "training",
      "programs",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "skill-development"
    },
    "iconName": "Award",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "training-programs"
  },
  {
    "title": "Courses",
    "category": "Courses & Training",
    "parent": "Skill Development Management Control",
    "hierarchy": [
      "Skill Development Management Control",
      "Courses"
    ],
    "description": "Manage comprehensive course catalogs and educational curriculum.",
    "keywords": [
      "skill development management control",
      "skill-development",
      "section",
      "card",
      "courses",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "skill-development"
    },
    "iconName": "Award",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "courses"
  },
  {
    "title": "Workshops",
    "category": "Courses & Training",
    "parent": "Skill Development Management Control",
    "hierarchy": [
      "Skill Development Management Control",
      "Workshops"
    ],
    "description": "Manage hands-on workshops and intensive training sessions.",
    "keywords": [
      "skill development management control",
      "skill-development",
      "section",
      "card",
      "workshops",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "skill-development"
    },
    "iconName": "Award",
    "badge": "Section Card",
    "theme": "violet",
    "id": "workshops"
  },
  {
    "title": "Awareness Programs",
    "category": "Courses & Training",
    "parent": "Skill Development Management Control",
    "hierarchy": [
      "Skill Development Management Control",
      "Awareness Programs"
    ],
    "description": "Manage cyber awareness campaigns and public education programs.",
    "keywords": [
      "skill development management control",
      "skill-development",
      "section",
      "card",
      "awareness",
      "programs",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "skill-development"
    },
    "iconName": "Award",
    "badge": "Section Card",
    "theme": "rose",
    "id": "awareness-programs"
  },
  {
    "title": "Research Programs",
    "category": "Courses & Training",
    "parent": "Skill Development Management Control",
    "hierarchy": [
      "Skill Development Management Control",
      "Research Programs"
    ],
    "description": "Manage academic and industrial research programs.",
    "keywords": [
      "skill development management control",
      "skill-development",
      "section",
      "card",
      "research",
      "programs",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "skill-development"
    },
    "iconName": "Award",
    "badge": "Section Card",
    "theme": "amber",
    "id": "research-programs"
  },
  {
    "title": "Mentorship Programs",
    "category": "Courses & Training",
    "parent": "Skill Development Management Control",
    "hierarchy": [
      "Skill Development Management Control",
      "Mentorship Programs"
    ],
    "description": "Manage personalized mentorship and professional guidance.",
    "keywords": [
      "skill development management control",
      "skill-development",
      "section",
      "card",
      "mentorship",
      "programs",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "skill-development"
    },
    "iconName": "Award",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "mentorship-programs"
  },
  {
    "title": "Corporate Training",
    "category": "Courses & Training",
    "parent": "Skill Development Management Control",
    "hierarchy": [
      "Skill Development Management Control",
      "Corporate Training"
    ],
    "description": "Manage corporate upskilling and professional development.",
    "keywords": [
      "skill development management control",
      "skill-development",
      "section",
      "card",
      "corporate",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "skill-development"
    },
    "iconName": "Award",
    "badge": "Section Card",
    "theme": "blue",
    "id": "corporate-training"
  },
  {
    "title": "Hackathons",
    "category": "Courses & Training",
    "parent": "Skill Development Management Control",
    "hierarchy": [
      "Skill Development Management Control",
      "Hackathons"
    ],
    "description": "Manage competitive hackathons and coding challenges.",
    "keywords": [
      "skill development management control",
      "skill-development",
      "section",
      "card",
      "hackathons",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "skill-development"
    },
    "iconName": "Award",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "hackathons"
  },
  {
    "title": "Talent Placement Program",
    "category": "Courses & Training",
    "parent": "Skill Development Management Control",
    "hierarchy": [
      "Skill Development Management Control",
      "Talent Placement Program"
    ],
    "description": "Manage talent acquisition, hiring, and job placement.",
    "keywords": [
      "skill development management control",
      "skill-development",
      "section",
      "card",
      "talent",
      "placement",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "skill-development"
    },
    "iconName": "Award",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "talent-placement-program"
  },
  {
    "title": "Career Guidance",
    "category": "Courses & Training",
    "parent": "Skill Development Management Control",
    "hierarchy": [
      "Skill Development Management Control",
      "Career Guidance"
    ],
    "description": "Provide professional career counseling and path planning.",
    "keywords": [
      "skill development management control",
      "skill-development",
      "section",
      "card",
      "career",
      "guidance",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "skill-development"
    },
    "iconName": "Award",
    "badge": "Section Card",
    "theme": "violet",
    "id": "career-guidance"
  },
  {
    "title": "Digital Libraries",
    "category": "Courses & Training",
    "parent": "Skill Development Management Control",
    "hierarchy": [
      "Skill Development Management Control",
      "Digital Libraries"
    ],
    "description": "Manage digital assets, educational resources, and books.",
    "keywords": [
      "skill development management control",
      "skill-development",
      "section",
      "card",
      "digital",
      "libraries",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "skill-development"
    },
    "iconName": "Award",
    "badge": "Section Card",
    "theme": "rose",
    "id": "digital-libraries"
  },
  {
    "title": "Cybersecurity Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Cybersecurity Internship"
    ],
    "description": "Manage internship programs focused on core cybersecurity.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "cybersecurity",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "blue",
    "id": "cybersecurity-internship"
  },
  {
    "title": "Cyber Forensics Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Cyber Forensics Internship"
    ],
    "description": "Manage digital forensics and evidence analysis programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "cyber",
      "forensics",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "cyber-forensics-internship"
  },
  {
    "title": "Ethical Hacking Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Ethical Hacking Internship"
    ],
    "description": "Manage programs for ethical hacking and vulnerability assessment.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "ethical",
      "hacking",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "ethical-hacking-internship"
  },
  {
    "title": "Penetration Testing Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Penetration Testing Internship"
    ],
    "description": "Configure offensive security and pen-testing internships.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "penetration",
      "testing",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "violet",
    "id": "penetration-testing-internship"
  },
  {
    "title": "SOC Analyst Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "SOC Analyst Internship"
    ],
    "description": "Manage Security Operations Center (SOC) analyst programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "soc",
      "analyst",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "rose",
    "id": "soc-analyst-internship"
  },
  {
    "title": "Network Security Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Network Security Internship"
    ],
    "description": "Manage network infrastructure security internships.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "network",
      "security",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "amber",
    "id": "network-security-internship"
  },
  {
    "title": "Cloud Security Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Cloud Security Internship"
    ],
    "description": "Configure cloud architecture and security programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "cloud",
      "security",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "cloud-security-internship"
  },
  {
    "title": "Incident Response Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Incident Response Internship"
    ],
    "description": "Manage cyber incident response training programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "incident",
      "response",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "blue",
    "id": "incident-response-internship"
  },
  {
    "title": "Threat Intelligence Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Threat Intelligence Internship"
    ],
    "description": "Configure threat hunting and intelligence internships.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "threat",
      "intelligence",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "threat-intelligence-internship"
  },
  {
    "title": "Application Security (AppSec)",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Application Security (AppSec)"
    ],
    "description": "Manage software application security internships.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "application",
      "security",
      "(appsec)",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "application-security-appsec"
  },
  {
    "title": "Malware Analysis Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Malware Analysis Internship"
    ],
    "description": "Configure reverse engineering and malware analysis programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "malware",
      "analysis",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "violet",
    "id": "malware-analysis-internship"
  },
  {
    "title": "OSINT Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "OSINT Internship"
    ],
    "description": "Manage Open Source Intelligence gathering programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "osint",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "rose",
    "id": "osint-internship"
  },
  {
    "title": "Software Development Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Software Development Internship"
    ],
    "description": "Configure general software engineering internships.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "software",
      "development",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "amber",
    "id": "software-development-internship"
  },
  {
    "title": "Web Development Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Web Development Internship"
    ],
    "description": "Manage frontend and backend web development programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "web",
      "development",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "web-development-internship"
  },
  {
    "title": "App Development Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "App Development Internship"
    ],
    "description": "Configure mobile and desktop application development programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "app",
      "development",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "blue",
    "id": "app-development-internship"
  },
  {
    "title": "iOS Development Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "iOS Development Internship"
    ],
    "description": "Manage specialized Apple iOS development internships.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "ios",
      "development",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "ios-development-internship"
  },
  {
    "title": "DevOps Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "DevOps Internship"
    ],
    "description": "Configure CI/CD, infrastructure, and DevOps internships.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "devops",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "devops-internship"
  },
  {
    "title": "QA / Testing Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "QA / Testing Internship"
    ],
    "description": "Manage quality assurance and software testing programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "testing",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "violet",
    "id": "qa-testing-internship"
  },
  {
    "title": "Database Administration (DBA)",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Database Administration (DBA)"
    ],
    "description": "Configure database architecture and administration programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "database",
      "administration",
      "(dba)",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "rose",
    "id": "database-administration-dba"
  },
  {
    "title": "Blockchain Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Blockchain Internship"
    ],
    "description": "Manage Web3, smart contracts, and blockchain internships.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "blockchain",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "amber",
    "id": "blockchain-internship"
  },
  {
    "title": "AI / Machine Learning Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "AI / Machine Learning Internship"
    ],
    "description": "Configure artificial intelligence and ML training programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "machine",
      "learning",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "ai-machine-learning-internship"
  },
  {
    "title": "Data Science Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Data Science Internship"
    ],
    "description": "Manage advanced data science and modeling internships.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "data",
      "science",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "blue",
    "id": "data-science-internship"
  },
  {
    "title": "Data Analyst Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Data Analyst Internship"
    ],
    "description": "Configure data analysis and visualization programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "data",
      "analyst",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "data-analyst-internship"
  },
  {
    "title": "UI/UX Design Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "UI/UX Design Internship"
    ],
    "description": "Manage user interface and user experience design programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "design",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "ui-ux-design-internship"
  },
  {
    "title": "IT Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "IT Internship"
    ],
    "description": "Configure general Information Technology support programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "violet",
    "id": "it-internship"
  },
  {
    "title": "HR Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "HR Internship"
    ],
    "description": "Manage human resources and recruitment internships.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "rose",
    "id": "hr-internship"
  },
  {
    "title": "Chartered Accountancy Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Chartered Accountancy Internship"
    ],
    "description": "Configure accounting, auditing, and financial programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "chartered",
      "accountancy",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "amber",
    "id": "chartered-accountancy-internship"
  },
  {
    "title": "Journalism Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Journalism Internship"
    ],
    "description": "Manage reporting, media, and journalism internships.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "journalism",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "journalism-internship"
  },
  {
    "title": "Digital Marketing Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Digital Marketing Internship"
    ],
    "description": "Configure SEO, marketing, and campaign management programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "digital",
      "marketing",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "blue",
    "id": "digital-marketing-internship"
  },
  {
    "title": "Graphic Design Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Graphic Design Internship"
    ],
    "description": "Manage visual design and branding internships.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "graphic",
      "design",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "graphic-design-internship"
  },
  {
    "title": "Content Writing Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Content Writing Internship"
    ],
    "description": "Configure copywriting and content creation programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "content",
      "writing",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "content-writing-internship"
  },
  {
    "title": "Finance Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Finance Internship"
    ],
    "description": "Manage corporate finance and economic analysis programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "finance",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "violet",
    "id": "finance-internship"
  },
  {
    "title": "Business Development Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Business Development Internship"
    ],
    "description": "Configure sales and business growth internships.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "business",
      "development",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "rose",
    "id": "business-development-internship"
  },
  {
    "title": "Product Management Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Product Management Internship"
    ],
    "description": "Manage product lifecycle and strategy internships.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "product",
      "management",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "amber",
    "id": "product-management-internship"
  },
  {
    "title": "Marketing Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Marketing Internship"
    ],
    "description": "Configure general marketing and advertising internships.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "marketing",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "marketing-internship"
  },
  {
    "title": "Reverse Engineering Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Reverse Engineering Internship"
    ],
    "description": "Manage software and hardware reverse engineering programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "reverse",
      "engineering",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "blue",
    "id": "reverse-engineering-internship"
  },
  {
    "title": "Cyber Law Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Cyber Law Internship"
    ],
    "description": "Configure programs focused on digital technology laws.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "cyber",
      "law",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "cyber-law-internship"
  },
  {
    "title": "Cyber Psychology Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Cyber Psychology Internship"
    ],
    "description": "Manage psychology and human factors in cyber space programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "cyber",
      "psychology",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "cyber-psychology-internship"
  },
  {
    "title": "Cyber Crime Investigation Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Cyber Crime Investigation Internship"
    ],
    "description": "Configure investigation techniques and procedures programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "cyber",
      "crime",
      "investigation",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "violet",
    "id": "cyber-crime-investigation-internship"
  },
  {
    "title": "Cybercrime Case Study Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Cybercrime Case Study Internship"
    ],
    "description": "Manage deep-dive case study and analysis internships.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "cybercrime",
      "case",
      "study",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "rose",
    "id": "cybercrime-case-study-internship"
  },
  {
    "title": "Cyber Intelligence Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Cyber Intelligence Internship"
    ],
    "description": "Configure advanced cyber intelligence operations programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "cyber",
      "intelligence",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "amber",
    "id": "cyber-intelligence-internship"
  },
  {
    "title": "Digital Evidence Analysis Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Digital Evidence Analysis Internship"
    ],
    "description": "Manage forensics and digital evidence analysis programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "digital",
      "evidence",
      "analysis",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "digital-evidence-analysis-internship"
  },
  {
    "title": "Cyber Risk Assessment Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Cyber Risk Assessment Internship"
    ],
    "description": "Configure organizational risk assessment training programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "cyber",
      "risk",
      "assessment",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "blue",
    "id": "cyber-risk-assessment-internship"
  },
  {
    "title": "Legal Research Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Legal Research Internship"
    ],
    "description": "Manage comprehensive legal research and study programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "legal",
      "research",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "legal-research-internship"
  },
  {
    "title": "Corporate Law Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Corporate Law Internship"
    ],
    "description": "Configure enterprise and corporate law internships.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "corporate",
      "law",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "corporate-law-internship"
  },
  {
    "title": "Criminal Law Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Criminal Law Internship"
    ],
    "description": "Manage criminal justice and law internships.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "criminal",
      "law",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "violet",
    "id": "criminal-law-internship"
  },
  {
    "title": "Digital Rights Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Digital Rights Internship"
    ],
    "description": "Configure human rights in digital spaces programs.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "digital",
      "rights",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "rose",
    "id": "digital-rights-internship"
  },
  {
    "title": "Legal Consulting Internship",
    "category": "Courses & Training",
    "parent": "Internship Management Control",
    "hierarchy": [
      "Internship Management Control",
      "Legal Consulting Internship"
    ],
    "description": "Manage advisory and legal consulting internships.",
    "keywords": [
      "internship management control",
      "internships",
      "section",
      "card",
      "legal",
      "consulting",
      "internship",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "internships"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "amber",
    "id": "legal-consulting-internship"
  },
  {
    "title": "Cybersecurity",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Cybersecurity"
    ],
    "description": "Training in core cybersecurity concepts and practices.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "cybersecurity",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "blue",
    "id": "cybersecurity"
  },
  {
    "title": "Software Development",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Software Development"
    ],
    "description": "Comprehensive training in software engineering.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "software",
      "development",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "software-development"
  },
  {
    "title": "Data Analytics",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Data Analytics"
    ],
    "description": "Training in data processing, analytics, and visualization.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "data",
      "analytics",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "data-analytics"
  },
  {
    "title": "Data Science",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Data Science"
    ],
    "description": "Advanced training in data science and statistical modeling.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "data",
      "science",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "violet",
    "id": "data-science"
  },
  {
    "title": "Artificial Intelligence & Machine Learning",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Artificial Intelligence & Machine Learning"
    ],
    "description": "Training in AI, ML models, and predictive algorithms.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "artificial",
      "intelligence",
      "machine",
      "learning",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "rose",
    "id": "artificial-intelligence-machine-learning"
  },
  {
    "title": "Web Development",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Web Development"
    ],
    "description": "Frontend and backend web development courses.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "web",
      "development",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "amber",
    "id": "web-development"
  },
  {
    "title": "Mobile App Development",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Mobile App Development"
    ],
    "description": "Cross-platform mobile application development training.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "mobile",
      "app",
      "development",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "mobile-app-development"
  },
  {
    "title": "iOS Development",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "iOS Development"
    ],
    "description": "Specialized Apple iOS app development courses.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "ios",
      "development",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "blue",
    "id": "ios-development"
  },
  {
    "title": "DevOps Engineering",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "DevOps Engineering"
    ],
    "description": "Training in CI/CD, automation, and DevOps methodologies.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "devops",
      "engineering",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "devops-engineering"
  },
  {
    "title": "Software Testing & QA",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Software Testing & QA"
    ],
    "description": "Quality assurance and software testing methodologies.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "software",
      "testing",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "software-testing-qa"
  },
  {
    "title": "Database Administration (DBA)",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Database Administration (DBA)"
    ],
    "description": "Training in database management and architecture.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "database",
      "administration",
      "(dba)",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "violet",
    "id": "database-administration-dba-2"
  },
  {
    "title": "Blockchain Development",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Blockchain Development"
    ],
    "description": "Web3, smart contracts, and blockchain programming.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "blockchain",
      "development",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "rose",
    "id": "blockchain-development"
  },
  {
    "title": "UI/UX Design",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "UI/UX Design"
    ],
    "description": "User interface and user experience design training.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "design",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "amber",
    "id": "ui-ux-design"
  },
  {
    "title": "Graphic Design",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Graphic Design"
    ],
    "description": "Visual design, branding, and digital graphic creation.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "graphic",
      "design",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "graphic-design"
  },
  {
    "title": "Content Writing",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Content Writing"
    ],
    "description": "Training in copywriting, SEO content, and technical writing.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "content",
      "writing",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "blue",
    "id": "content-writing"
  },
  {
    "title": "Digital Marketing",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Digital Marketing"
    ],
    "description": "Comprehensive digital marketing and campaign training.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "digital",
      "marketing",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "digital-marketing"
  },
  {
    "title": "Marketing Management",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Marketing Management"
    ],
    "description": "Training in strategic marketing management.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "marketing",
      "management",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "marketing-management"
  },
  {
    "title": "Business Development",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Business Development"
    ],
    "description": "Sales strategy and business growth training.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "business",
      "development",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "violet",
    "id": "business-development"
  },
  {
    "title": "Product Management",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Product Management"
    ],
    "description": "Product lifecycle and strategy management courses.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "product",
      "management",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "rose",
    "id": "product-management"
  },
  {
    "title": "Finance & Accounting",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Finance & Accounting"
    ],
    "description": "Training in corporate finance, accounting, and economics.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "finance",
      "accounting",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "amber",
    "id": "finance-accounting"
  },
  {
    "title": "Human Resources (HR)",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Human Resources (HR)"
    ],
    "description": "HR management and recruitment training.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "human",
      "resources",
      "(hr)",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "human-resources-hr"
  },
  {
    "title": "Journalism & Media",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Journalism & Media"
    ],
    "description": "Training in reporting, media studies, and journalism.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "journalism",
      "media",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "blue",
    "id": "journalism-media"
  },
  {
    "title": "Chartered Accountancy (CA)",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Chartered Accountancy (CA)"
    ],
    "description": "Advanced accounting and auditing training.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "chartered",
      "accountancy",
      "(ca)",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "chartered-accountancy-ca"
  },
  {
    "title": "Ethical Hacking",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Ethical Hacking"
    ],
    "description": "Offensive security and ethical hacking practices.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "ethical",
      "hacking",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "ethical-hacking"
  },
  {
    "title": "Penetration Testing",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Penetration Testing"
    ],
    "description": "Advanced penetration testing and vulnerability assessment.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "penetration",
      "testing",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "violet",
    "id": "penetration-testing"
  },
  {
    "title": "SOC Analyst",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "SOC Analyst"
    ],
    "description": "Security Operations Center monitoring and analysis.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "soc",
      "analyst",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "rose",
    "id": "soc-analyst"
  },
  {
    "title": "Network Security",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Network Security"
    ],
    "description": "Securing network infrastructure and protocols.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "network",
      "security",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "amber",
    "id": "network-security"
  },
  {
    "title": "Cloud Security",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Cloud Security"
    ],
    "description": "Cloud architecture and cloud-native security training.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "cloud",
      "security",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "cloud-security"
  },
  {
    "title": "Incident Response",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Incident Response"
    ],
    "description": "Cyber incident handling and response procedures.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "incident",
      "response",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "blue",
    "id": "incident-response"
  },
  {
    "title": "Threat Intelligence",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Threat Intelligence"
    ],
    "description": "Threat hunting and cyber intelligence gathering.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "threat",
      "intelligence",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "threat-intelligence"
  },
  {
    "title": "Application Security (AppSec)",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Application Security (AppSec)"
    ],
    "description": "Securing software applications from vulnerabilities.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "application",
      "security",
      "(appsec)",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "application-security-appsec-2"
  },
  {
    "title": "Malware Analysis",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Malware Analysis"
    ],
    "description": "Reverse engineering and analyzing malicious software.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "malware",
      "analysis",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "violet",
    "id": "malware-analysis"
  },
  {
    "title": "OSINT (Open Source Intelligence)",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "OSINT (Open Source Intelligence)"
    ],
    "description": "Open source intelligence collection and analysis.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "osint",
      "(open",
      "source",
      "intelligence)",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "rose",
    "id": "osint-open-source-intelligence"
  },
  {
    "title": "Reverse Engineering",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Reverse Engineering"
    ],
    "description": "Hardware and software reverse engineering techniques.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "reverse",
      "engineering",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "amber",
    "id": "reverse-engineering"
  },
  {
    "title": "Cyber Forensics",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Cyber Forensics"
    ],
    "description": "Digital forensics and post-incident analysis.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "cyber",
      "forensics",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "cyber-forensics"
  },
  {
    "title": "Cyber Crime Investigation",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Cyber Crime Investigation"
    ],
    "description": "Methodologies for investigating digital crimes.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "cyber",
      "crime",
      "investigation",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "blue",
    "id": "cyber-crime-investigation"
  },
  {
    "title": "Cybercrime Case Study",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Cybercrime Case Study"
    ],
    "description": "In-depth analysis of major cybercrime cases.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "cybercrime",
      "case",
      "study",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "cybercrime-case-study"
  },
  {
    "title": "Cyber Intelligence",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Cyber Intelligence"
    ],
    "description": "Advanced operations in cyber intelligence.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "cyber",
      "intelligence",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "cyber-intelligence"
  },
  {
    "title": "Digital Evidence Analysis",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Digital Evidence Analysis"
    ],
    "description": "Acquisition and analysis of digital evidence.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "digital",
      "evidence",
      "analysis",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "violet",
    "id": "digital-evidence-analysis"
  },
  {
    "title": "Cyber Risk Assessment",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Cyber Risk Assessment"
    ],
    "description": "Evaluating and managing organizational cyber risks.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "cyber",
      "risk",
      "assessment",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "rose",
    "id": "cyber-risk-assessment"
  },
  {
    "title": "Cyber Psychology",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Cyber Psychology"
    ],
    "description": "Understanding the human element in cybersecurity.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "cyber",
      "psychology",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "amber",
    "id": "cyber-psychology"
  },
  {
    "title": "Cyber Law",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Cyber Law"
    ],
    "description": "Training in digital technology and cyber laws.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "cyber",
      "law",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "cyber-law"
  },
  {
    "title": "Legal Research",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Legal Research"
    ],
    "description": "Methodologies for comprehensive legal research.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "legal",
      "research",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "blue",
    "id": "legal-research"
  },
  {
    "title": "Corporate Law",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Corporate Law"
    ],
    "description": "Training in corporate legal compliance and structures.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "corporate",
      "law",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "corporate-law"
  },
  {
    "title": "Criminal Law",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Criminal Law"
    ],
    "description": "Foundational training in criminal justice and law.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "criminal",
      "law",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "criminal-law"
  },
  {
    "title": "Digital Rights",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Digital Rights"
    ],
    "description": "Studying human rights in the digital landscape.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "digital",
      "rights",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "violet",
    "id": "digital-rights"
  },
  {
    "title": "Legal Consulting",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Legal Consulting"
    ],
    "description": "Training for advisory and legal consulting roles.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "legal",
      "consulting",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "rose",
    "id": "legal-consulting"
  },
  {
    "title": "Cyber Threat Hunting",
    "category": "Courses & Training",
    "parent": "Training Programs Management Control",
    "hierarchy": [
      "Training Programs Management Control",
      "Cyber Threat Hunting"
    ],
    "description": "Proactively searching for cyber threats and anomalies.",
    "keywords": [
      "training programs management control",
      "training-programs",
      "section",
      "card",
      "cyber",
      "threat",
      "hunting",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "training-programs"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "amber",
    "id": "cyber-threat-hunting"
  },
  {
    "title": "Cybersecurity Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Cybersecurity Course"
    ],
    "description": "Course on core cybersecurity concepts and practices.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "cybersecurity",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "blue",
    "id": "cybersecurity-course"
  },
  {
    "title": "Ethical Hacking Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Ethical Hacking Course"
    ],
    "description": "Offensive security and ethical hacking practices.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "ethical",
      "hacking",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "ethical-hacking-course"
  },
  {
    "title": "Penetration Testing Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Penetration Testing Course"
    ],
    "description": "Advanced penetration testing and vulnerability assessment.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "penetration",
      "testing",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "penetration-testing-course"
  },
  {
    "title": "SOC Analyst Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "SOC Analyst Course"
    ],
    "description": "Security Operations Center monitoring and analysis.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "soc",
      "analyst",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "violet",
    "id": "soc-analyst-course"
  },
  {
    "title": "Network Security Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Network Security Course"
    ],
    "description": "Securing network infrastructure and protocols.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "network",
      "security",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "rose",
    "id": "network-security-course"
  },
  {
    "title": "Cloud Security Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Cloud Security Course"
    ],
    "description": "Cloud architecture and cloud-native security.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "cloud",
      "security",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "amber",
    "id": "cloud-security-course"
  },
  {
    "title": "Incident Response Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Incident Response Course"
    ],
    "description": "Cyber incident handling and response procedures.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "incident",
      "response",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "incident-response-course"
  },
  {
    "title": "Threat Intelligence Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Threat Intelligence Course"
    ],
    "description": "Threat hunting and cyber intelligence gathering.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "threat",
      "intelligence",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "blue",
    "id": "threat-intelligence-course"
  },
  {
    "title": "Application Security (AppSec) Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Application Security (AppSec) Course"
    ],
    "description": "Securing software applications from vulnerabilities.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "application",
      "security",
      "(appsec)",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "application-security-appsec-course"
  },
  {
    "title": "Malware Analysis Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Malware Analysis Course"
    ],
    "description": "Reverse engineering and analyzing malicious software.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "malware",
      "analysis",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "malware-analysis-course"
  },
  {
    "title": "OSINT (Open Source Intelligence) Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "OSINT (Open Source Intelligence) Course"
    ],
    "description": "Open source intelligence collection and analysis.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "osint",
      "(open",
      "source",
      "intelligence)",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "violet",
    "id": "osint-open-source-intelligence-course"
  },
  {
    "title": "Reverse Engineering Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Reverse Engineering Course"
    ],
    "description": "Hardware and software reverse engineering techniques.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "reverse",
      "engineering",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "rose",
    "id": "reverse-engineering-course"
  },
  {
    "title": "Cyber Forensics Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Cyber Forensics Course"
    ],
    "description": "Digital forensics and post-incident analysis.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "cyber",
      "forensics",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "amber",
    "id": "cyber-forensics-course"
  },
  {
    "title": "Cyber Crime Investigation Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Cyber Crime Investigation Course"
    ],
    "description": "Methodologies for investigating digital crimes.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "cyber",
      "crime",
      "investigation",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "cyber-crime-investigation-course"
  },
  {
    "title": "Cybercrime Case Study Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Cybercrime Case Study Course"
    ],
    "description": "In-depth analysis of major cybercrime cases.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "cybercrime",
      "case",
      "study",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "blue",
    "id": "cybercrime-case-study-course"
  },
  {
    "title": "Cyber Intelligence Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Cyber Intelligence Course"
    ],
    "description": "Advanced operations in cyber intelligence.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "cyber",
      "intelligence",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "cyber-intelligence-course"
  },
  {
    "title": "Digital Evidence Analysis Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Digital Evidence Analysis Course"
    ],
    "description": "Acquisition and analysis of digital evidence.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "digital",
      "evidence",
      "analysis",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "digital-evidence-analysis-course"
  },
  {
    "title": "Cyber Risk Assessment Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Cyber Risk Assessment Course"
    ],
    "description": "Evaluating and managing organizational cyber risks.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "cyber",
      "risk",
      "assessment",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "violet",
    "id": "cyber-risk-assessment-course"
  },
  {
    "title": "Cyber Psychology Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Cyber Psychology Course"
    ],
    "description": "Understanding the human element in cybersecurity.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "cyber",
      "psychology",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "rose",
    "id": "cyber-psychology-course"
  },
  {
    "title": "Cyber Threat Hunting Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Cyber Threat Hunting Course"
    ],
    "description": "Proactively searching for cyber threats and anomalies.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "cyber",
      "threat",
      "hunting",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "amber",
    "id": "cyber-threat-hunting-course"
  },
  {
    "title": "Software Development Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Software Development Course"
    ],
    "description": "Comprehensive course in software engineering.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "software",
      "development",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "software-development-course"
  },
  {
    "title": "Data Analytics Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Data Analytics Course"
    ],
    "description": "Course in data processing, analytics, and visualization.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "data",
      "analytics",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "blue",
    "id": "data-analytics-course"
  },
  {
    "title": "Data Science Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Data Science Course"
    ],
    "description": "Advanced course in data science and statistical modeling.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "data",
      "science",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "data-science-course"
  },
  {
    "title": "Artificial Intelligence & Machine Learning Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Artificial Intelligence & Machine Learning Course"
    ],
    "description": "Course in AI, ML models, and predictive algorithms.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "artificial",
      "intelligence",
      "machine",
      "learning",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "artificial-intelligence-machine-learning-course"
  },
  {
    "title": "Web Development Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Web Development Course"
    ],
    "description": "Frontend and backend web development courses.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "web",
      "development",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "violet",
    "id": "web-development-course"
  },
  {
    "title": "Mobile App Development Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Mobile App Development Course"
    ],
    "description": "Cross-platform mobile application development.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "mobile",
      "app",
      "development",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "rose",
    "id": "mobile-app-development-course"
  },
  {
    "title": "iOS Development Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "iOS Development Course"
    ],
    "description": "Specialized Apple iOS app development courses.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "ios",
      "development",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "amber",
    "id": "ios-development-course"
  },
  {
    "title": "DevOps Engineering Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "DevOps Engineering Course"
    ],
    "description": "Course in CI/CD, automation, and DevOps methodologies.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "devops",
      "engineering",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "devops-engineering-course"
  },
  {
    "title": "Software Testing & QA Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Software Testing & QA Course"
    ],
    "description": "Quality assurance and software testing methodologies.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "software",
      "testing",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "blue",
    "id": "software-testing-qa-course"
  },
  {
    "title": "Database Administration (DBA) Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Database Administration (DBA) Course"
    ],
    "description": "Course in database management and architecture.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "database",
      "administration",
      "(dba)",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "database-administration-dba-course"
  },
  {
    "title": "Blockchain Development Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Blockchain Development Course"
    ],
    "description": "Web3, smart contracts, and blockchain programming.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "blockchain",
      "development",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "blockchain-development-course"
  },
  {
    "title": "UI/UX Design Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "UI/UX Design Course"
    ],
    "description": "User interface and user experience design course.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "design",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "violet",
    "id": "ui-ux-design-course"
  },
  {
    "title": "Graphic Design Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Graphic Design Course"
    ],
    "description": "Visual design, branding, and digital graphic creation.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "graphic",
      "design",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "rose",
    "id": "graphic-design-course"
  },
  {
    "title": "Content Writing Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Content Writing Course"
    ],
    "description": "Course in copywriting, SEO content, and technical writing.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "content",
      "writing",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "amber",
    "id": "content-writing-course"
  },
  {
    "title": "Digital Marketing Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Digital Marketing Course"
    ],
    "description": "Comprehensive digital marketing and campaign course.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "digital",
      "marketing",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "digital-marketing-course"
  },
  {
    "title": "Marketing Management Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Marketing Management Course"
    ],
    "description": "Course in strategic marketing management.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "marketing",
      "management",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "blue",
    "id": "marketing-management-course"
  },
  {
    "title": "Business Development Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Business Development Course"
    ],
    "description": "Sales strategy and business growth course.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "business",
      "development",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "business-development-course"
  },
  {
    "title": "Product Management Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Product Management Course"
    ],
    "description": "Product lifecycle and strategy management course.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "product",
      "management",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "product-management-course"
  },
  {
    "title": "Finance & Accounting Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Finance & Accounting Course"
    ],
    "description": "Course in corporate finance, accounting, and economics.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "finance",
      "accounting",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "violet",
    "id": "finance-accounting-course"
  },
  {
    "title": "Chartered Accountancy (CA) Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Chartered Accountancy (CA) Course"
    ],
    "description": "Advanced accounting and auditing course.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "chartered",
      "accountancy",
      "(ca)",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "rose",
    "id": "chartered-accountancy-ca-course"
  },
  {
    "title": "Cyber Law Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Cyber Law Course"
    ],
    "description": "Course in digital technology and cyber laws.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "cyber",
      "law",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "amber",
    "id": "cyber-law-course"
  },
  {
    "title": "Legal Research Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Legal Research Course"
    ],
    "description": "Methodologies for comprehensive legal research.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "legal",
      "research",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "legal-research-course"
  },
  {
    "title": "Corporate Law Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Corporate Law Course"
    ],
    "description": "Course in corporate legal compliance and structures.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "corporate",
      "law",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "blue",
    "id": "corporate-law-course"
  },
  {
    "title": "Criminal Law Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Criminal Law Course"
    ],
    "description": "Foundational course in criminal justice and law.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "criminal",
      "law",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "criminal-law-course"
  },
  {
    "title": "Digital Rights Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Digital Rights Course"
    ],
    "description": "Studying human rights in the digital landscape.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "digital",
      "rights",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "digital-rights-course"
  },
  {
    "title": "Legal Consulting Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Legal Consulting Course"
    ],
    "description": "Course for advisory and legal consulting roles.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "legal",
      "consulting",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "violet",
    "id": "legal-consulting-course"
  },
  {
    "title": "Human Resources (HR) Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Human Resources (HR) Course"
    ],
    "description": "HR management and recruitment course.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "human",
      "resources",
      "(hr)",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "rose",
    "id": "human-resources-hr-course"
  },
  {
    "title": "Journalism & Media Course",
    "category": "Courses & Training",
    "parent": "Courses Management Control",
    "hierarchy": [
      "Courses Management Control",
      "Journalism & Media Course"
    ],
    "description": "Course in reporting, media studies, and journalism.",
    "keywords": [
      "courses management control",
      "courses",
      "section",
      "card",
      "journalism",
      "media",
      "course",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "courses"
    },
    "iconName": "BookOpen",
    "badge": "Section Card",
    "theme": "amber",
    "id": "journalism-media-course"
  },
  {
    "title": "Ethical Security Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Ethical Security Workshop"
    ],
    "description": "Hands-on workshop focusing on ethical security practices.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "ethical",
      "security",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "blue",
    "id": "ethical-security-workshop"
  },
  {
    "title": "Cybersecurity Essentials Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Cybersecurity Essentials Workshop"
    ],
    "description": "Core principles and essentials of cybersecurity.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "cybersecurity",
      "essentials",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "cybersecurity-essentials-workshop"
  },
  {
    "title": "Network Security Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Network Security Workshop"
    ],
    "description": "Deep dive into network protocols and defense mechanisms.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "network",
      "security",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "network-security-workshop"
  },
  {
    "title": "SOC Analyst Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "SOC Analyst Workshop"
    ],
    "description": "Practical training on Security Operations Center monitoring.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "soc",
      "analyst",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "violet",
    "id": "soc-analyst-workshop"
  },
  {
    "title": "Malware Analysis Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Malware Analysis Workshop"
    ],
    "description": "Techniques for analyzing and understanding malware.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "malware",
      "analysis",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "rose",
    "id": "malware-analysis-workshop"
  },
  {
    "title": "React JS Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "React JS Workshop"
    ],
    "description": "Frontend development workshop focusing on React JS.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "react",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "amber",
    "id": "react-js-workshop"
  },
  {
    "title": "Full Stack Development Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Full Stack Development Workshop"
    ],
    "description": "Comprehensive full-stack web application development.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "full",
      "stack",
      "development",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "full-stack-development-workshop"
  },
  {
    "title": "Mobile App Development Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Mobile App Development Workshop"
    ],
    "description": "Building and deploying cross-platform mobile apps.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "mobile",
      "app",
      "development",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "blue",
    "id": "mobile-app-development-workshop"
  },
  {
    "title": "API Development Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "API Development Workshop"
    ],
    "description": "Designing, building, and securing RESTful APIs.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "api",
      "development",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "api-development-workshop"
  },
  {
    "title": "Git & GitHub Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Git & GitHub Workshop"
    ],
    "description": "Version control and collaboration using Git and GitHub.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "git",
      "github",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "git-github-workshop"
  },
  {
    "title": "Data Analytics Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Data Analytics Workshop"
    ],
    "description": "Hands-on data processing and analytics tools.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "data",
      "analytics",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "violet",
    "id": "data-analytics-workshop"
  },
  {
    "title": "Data Science Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Data Science Workshop"
    ],
    "description": "Advanced statistics and data modeling techniques.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "data",
      "science",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "rose",
    "id": "data-science-workshop"
  },
  {
    "title": "Machine Learning Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Machine Learning Workshop"
    ],
    "description": "Building and training machine learning algorithms.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "machine",
      "learning",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "amber",
    "id": "machine-learning-workshop"
  },
  {
    "title": "Generative AI Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Generative AI Workshop"
    ],
    "description": "Exploring and building with generative AI models.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "generative",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "generative-ai-workshop"
  },
  {
    "title": "Prompt Engineering Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Prompt Engineering Workshop"
    ],
    "description": "Techniques for optimizing AI prompt interactions.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "prompt",
      "engineering",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "blue",
    "id": "prompt-engineering-workshop"
  },
  {
    "title": "UI/UX Design Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "UI/UX Design Workshop"
    ],
    "description": "Designing intuitive and engaging user interfaces.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "design",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "ui-ux-design-workshop"
  },
  {
    "title": "Figma Masterclass Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Figma Masterclass Workshop"
    ],
    "description": "Advanced interface design using Figma.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "figma",
      "masterclass",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "figma-masterclass-workshop"
  },
  {
    "title": "Graphic Design Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Graphic Design Workshop"
    ],
    "description": "Fundamentals of digital graphic design and branding.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "graphic",
      "design",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "violet",
    "id": "graphic-design-workshop"
  },
  {
    "title": "Digital Marketing Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Digital Marketing Workshop"
    ],
    "description": "Strategies for digital marketing and online growth.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "digital",
      "marketing",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "rose",
    "id": "digital-marketing-workshop"
  },
  {
    "title": "SEO Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "SEO Workshop"
    ],
    "description": "Search engine optimization and ranking strategies.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "seo",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "amber",
    "id": "seo-workshop"
  },
  {
    "title": "Social Media Marketing Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Social Media Marketing Workshop"
    ],
    "description": "Building and managing social media campaigns.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "social",
      "media",
      "marketing",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "social-media-marketing-workshop"
  },
  {
    "title": "Content Marketing Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Content Marketing Workshop"
    ],
    "description": "Creating compelling content for digital marketing.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "content",
      "marketing",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "blue",
    "id": "content-marketing-workshop"
  },
  {
    "title": "Product Management Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Product Management Workshop"
    ],
    "description": "Managing product lifecycles and product strategies.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "product",
      "management",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "product-management-workshop"
  },
  {
    "title": "Business Development Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Business Development Workshop"
    ],
    "description": "Techniques for sales and scaling business growth.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "business",
      "development",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "business-development-workshop"
  },
  {
    "title": "Entrepreneurship Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Entrepreneurship Workshop"
    ],
    "description": "Foundations of starting and managing a new venture.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "entrepreneurship",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "violet",
    "id": "entrepreneurship-workshop"
  },
  {
    "title": "Cyber Law Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Cyber Law Workshop"
    ],
    "description": "Navigating digital technology and cyber laws.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "cyber",
      "law",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "rose",
    "id": "cyber-law-workshop"
  },
  {
    "title": "Digital Rights Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Digital Rights Workshop"
    ],
    "description": "Understanding human rights in digital spaces.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "digital",
      "rights",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "amber",
    "id": "digital-rights-workshop"
  },
  {
    "title": "Legal Research Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Legal Research Workshop"
    ],
    "description": "Effective methodologies for legal research.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "legal",
      "research",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "legal-research-workshop"
  },
  {
    "title": "Cloud Computing Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Cloud Computing Workshop"
    ],
    "description": "Fundamentals of cloud architecture and services.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "cloud",
      "computing",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "blue",
    "id": "cloud-computing-workshop"
  },
  {
    "title": "DevOps Fundamentals Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "DevOps Fundamentals Workshop"
    ],
    "description": "Introduction to CI/CD and DevOps practices.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "devops",
      "fundamentals",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "devops-fundamentals-workshop"
  },
  {
    "title": "Docker & Kubernetes Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Docker & Kubernetes Workshop"
    ],
    "description": "Containerization and orchestration masterclass.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "docker",
      "kubernetes",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "docker-kubernetes-workshop"
  },
  {
    "title": "Blockchain Development Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Blockchain Development Workshop"
    ],
    "description": "Building smart contracts and decentralized apps.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "blockchain",
      "development",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "violet",
    "id": "blockchain-development-workshop"
  },
  {
    "title": "Internet of Things (IoT) Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Internet of Things (IoT) Workshop"
    ],
    "description": "Connecting and securing IoT devices and networks.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "internet",
      "things",
      "(iot)",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "rose",
    "id": "internet-of-things-iot-workshop"
  },
  {
    "title": "Database Management Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Database Management Workshop"
    ],
    "description": "Designing and querying relational databases.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "database",
      "management",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "amber",
    "id": "database-management-workshop"
  },
  {
    "title": "Software Testing Automation Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Software Testing Automation Workshop"
    ],
    "description": "Automating software quality assurance workflows.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "software",
      "testing",
      "automation",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "software-testing-automation-workshop"
  },
  {
    "title": "Reverse Engineering Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Reverse Engineering Workshop"
    ],
    "description": "Techniques for reverse engineering hardware/software.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "reverse",
      "engineering",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "blue",
    "id": "reverse-engineering-workshop"
  },
  {
    "title": "Threat Intelligence Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Threat Intelligence Workshop"
    ],
    "description": "Gathering and analyzing cyber threat intelligence.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "threat",
      "intelligence",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "threat-intelligence-workshop"
  },
  {
    "title": "Cyber Forensics Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Cyber Forensics Workshop"
    ],
    "description": "Digital forensics and post-incident investigation.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "cyber",
      "forensics",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "cyber-forensics-workshop"
  },
  {
    "title": "OSINT Investigation Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "OSINT Investigation Workshop"
    ],
    "description": "Advanced Open Source Intelligence gathering.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "osint",
      "investigation",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "violet",
    "id": "osint-investigation-workshop"
  },
  {
    "title": "Incident Response Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Incident Response Workshop"
    ],
    "description": "Hands-on cyber incident handling and response.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "incident",
      "response",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "rose",
    "id": "incident-response-workshop"
  },
  {
    "title": "Cyber Threat Hunting Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Cyber Threat Hunting Workshop"
    ],
    "description": "Proactively detecting and neutralizing cyber threats.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "cyber",
      "threat",
      "hunting",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "amber",
    "id": "cyber-threat-hunting-workshop"
  },
  {
    "title": "Corporate Law Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Corporate Law Workshop"
    ],
    "description": "Navigating corporate legal structures and compliance.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "corporate",
      "law",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "corporate-law-workshop"
  },
  {
    "title": "Criminal Law Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Criminal Law Workshop"
    ],
    "description": "Foundations of criminal justice and law.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "criminal",
      "law",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "blue",
    "id": "criminal-law-workshop"
  },
  {
    "title": "Finance & Accounting Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Finance & Accounting Workshop"
    ],
    "description": "Essentials of corporate finance and accounting.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "finance",
      "accounting",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "finance-accounting-workshop"
  },
  {
    "title": "Human Resource Management Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Human Resource Management Workshop"
    ],
    "description": "Managing talent and organizational culture.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "human",
      "resource",
      "management",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "human-resource-management-workshop"
  },
  {
    "title": "Journalism & Media Production Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Journalism & Media Production Workshop"
    ],
    "description": "Modern reporting and digital media production.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "journalism",
      "media",
      "production",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "violet",
    "id": "journalism-media-production-workshop"
  },
  {
    "title": "Content Writing & Copywriting Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Content Writing & Copywriting Workshop"
    ],
    "description": "Crafting high-impact copy and engaging content.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "content",
      "writing",
      "copywriting",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "rose",
    "id": "content-writing-copywriting-workshop"
  },
  {
    "title": "Startup & Innovation Workshop",
    "category": "Courses & Training",
    "parent": "Workshops Management Control",
    "hierarchy": [
      "Workshops Management Control",
      "Startup & Innovation Workshop"
    ],
    "description": "Strategies for innovative product and startup creation.",
    "keywords": [
      "workshops management control",
      "workshops",
      "section",
      "card",
      "startup",
      "innovation",
      "workshop",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "workshops"
    },
    "iconName": "Users",
    "badge": "Section Card",
    "theme": "amber",
    "id": "startup-innovation-workshop"
  },
  {
    "title": "Cyber Safety Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Cyber Safety Awareness Program"
    ],
    "description": "Program for general online safety and best practices.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "cyber",
      "safety",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "blue",
    "id": "cyber-safety-awareness-program"
  },
  {
    "title": "Internet Security Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Internet Security Awareness Program"
    ],
    "description": "Awareness on securing personal and enterprise internet connections.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "internet",
      "security",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "internet-security-awareness-program"
  },
  {
    "title": "Digital Privacy Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Digital Privacy Awareness Program"
    ],
    "description": "Educating on data privacy and digital footprint protection.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "digital",
      "privacy",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "digital-privacy-awareness-program"
  },
  {
    "title": "Online Fraud Prevention Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Online Fraud Prevention Awareness Program"
    ],
    "description": "Awareness on avoiding online scams and financial fraud.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "online",
      "fraud",
      "prevention",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "violet",
    "id": "online-fraud-prevention-awareness-program"
  },
  {
    "title": "Phishing Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Phishing Awareness Program"
    ],
    "description": "Recognizing and avoiding email and message phishing attacks.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "phishing",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "rose",
    "id": "phishing-awareness-program"
  },
  {
    "title": "Ransomware Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Ransomware Awareness Program"
    ],
    "description": "Awareness on ransomware risks and prevention strategies.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "ransomware",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "amber",
    "id": "ransomware-awareness-program"
  },
  {
    "title": "Social Engineering Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Social Engineering Awareness Program"
    ],
    "description": "Understanding psychological manipulation in cyber attacks.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "social",
      "engineering",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "social-engineering-awareness-program"
  },
  {
    "title": "Password Security Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Password Security Awareness Program"
    ],
    "description": "Best practices for strong password management.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "password",
      "security",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "blue",
    "id": "password-security-awareness-program"
  },
  {
    "title": "Safe Browsing Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Safe Browsing Awareness Program"
    ],
    "description": "Guidelines for safe web browsing and downloading.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "safe",
      "browsing",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "safe-browsing-awareness-program"
  },
  {
    "title": "Mobile Security Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Mobile Security Awareness Program"
    ],
    "description": "Securing mobile devices and applications.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "mobile",
      "security",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "mobile-security-awareness-program"
  },
  {
    "title": "Cloud Security Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Cloud Security Awareness Program"
    ],
    "description": "Understanding risks and security in cloud storage.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "cloud",
      "security",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "violet",
    "id": "cloud-security-awareness-program"
  },
  {
    "title": "Network Security Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Network Security Awareness Program"
    ],
    "description": "Basic awareness on securing local and Wi-Fi networks.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "network",
      "security",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "rose",
    "id": "network-security-awareness-program"
  },
  {
    "title": "Artificial Intelligence (AI) Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Artificial Intelligence (AI) Awareness Program"
    ],
    "description": "General education on AI capabilities and risks.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "artificial",
      "intelligence",
      "(ai)",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "amber",
    "id": "artificial-intelligence-ai-awareness-program"
  },
  {
    "title": "Machine Learning Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Machine Learning Awareness Program"
    ],
    "description": "Introduction to machine learning concepts and uses.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "machine",
      "learning",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "machine-learning-awareness-program"
  },
  {
    "title": "Generative AI Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Generative AI Awareness Program"
    ],
    "description": "Awareness on generative AI models and their impact.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "generative",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "blue",
    "id": "generative-ai-awareness-program"
  },
  {
    "title": "Responsible AI Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Responsible AI Awareness Program"
    ],
    "description": "Ethics and responsibility in AI development and usage.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "responsible",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "responsible-ai-awareness-program"
  },
  {
    "title": "Data Science Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Data Science Awareness Program"
    ],
    "description": "Introduction to data science and big data analytics.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "data",
      "science",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "data-science-awareness-program"
  },
  {
    "title": "Data Analytics Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Data Analytics Awareness Program"
    ],
    "description": "Awareness on data processing and analysis tools.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "data",
      "analytics",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "violet",
    "id": "data-analytics-awareness-program"
  },
  {
    "title": "Web Development Career Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Web Development Career Awareness Program"
    ],
    "description": "Career paths and opportunities in web development.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "web",
      "development",
      "career",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "rose",
    "id": "web-development-career-awareness-program"
  },
  {
    "title": "Mobile App Development Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Mobile App Development Awareness Program"
    ],
    "description": "Exploring careers in mobile application development.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "mobile",
      "app",
      "development",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "amber",
    "id": "mobile-app-development-awareness-program"
  },
  {
    "title": "Software Development Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Software Development Awareness Program"
    ],
    "description": "Understanding the software engineering lifecycle.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "software",
      "development",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "software-development-awareness-program"
  },
  {
    "title": "DevOps Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "DevOps Awareness Program"
    ],
    "description": "Introduction to DevOps and continuous integration.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "devops",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "blue",
    "id": "devops-awareness-program"
  },
  {
    "title": "Software Testing Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Software Testing Awareness Program"
    ],
    "description": "Awareness on QA and software testing methodologies.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "software",
      "testing",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "software-testing-awareness-program"
  },
  {
    "title": "Blockchain Technology Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Blockchain Technology Awareness Program"
    ],
    "description": "Introduction to blockchain and decentralized systems.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "blockchain",
      "technology",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "blockchain-technology-awareness-program"
  },
  {
    "title": "UI/UX Design Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "UI/UX Design Awareness Program"
    ],
    "description": "Awareness on user interface and user experience design.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "design",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "violet",
    "id": "ui-ux-design-awareness-program"
  },
  {
    "title": "Graphic Design Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Graphic Design Awareness Program"
    ],
    "description": "Career opportunities in digital graphic design.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "graphic",
      "design",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "rose",
    "id": "graphic-design-awareness-program"
  },
  {
    "title": "Digital Content Creation Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Digital Content Creation Awareness Program"
    ],
    "description": "Creating and managing digital content.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "digital",
      "content",
      "creation",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "amber",
    "id": "digital-content-creation-awareness-program"
  },
  {
    "title": "Content Writing Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Content Writing Awareness Program"
    ],
    "description": "Awareness on professional copywriting and SEO content.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "content",
      "writing",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "content-writing-awareness-program"
  },
  {
    "title": "Digital Marketing Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Digital Marketing Awareness Program"
    ],
    "description": "Introduction to digital marketing and campaigns.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "digital",
      "marketing",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "blue",
    "id": "digital-marketing-awareness-program"
  },
  {
    "title": "SEO Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "SEO Awareness Program"
    ],
    "description": "Understanding search engine optimization strategies.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "seo",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "seo-awareness-program"
  },
  {
    "title": "Social Media Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Social Media Awareness Program"
    ],
    "description": "Safe and effective use of social media platforms.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "social",
      "media",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "social-media-awareness-program"
  },
  {
    "title": "Brand Building Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Brand Building Awareness Program"
    ],
    "description": "Strategies for personal and corporate brand building.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "brand",
      "building",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "violet",
    "id": "brand-building-awareness-program"
  },
  {
    "title": "Entrepreneurship Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Entrepreneurship Awareness Program"
    ],
    "description": "Foundations and pathways for entrepreneurship.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "entrepreneurship",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "rose",
    "id": "entrepreneurship-awareness-program"
  },
  {
    "title": "Startup Ecosystem Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Startup Ecosystem Awareness Program"
    ],
    "description": "Navigating and understanding the startup ecosystem.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "startup",
      "ecosystem",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "amber",
    "id": "startup-ecosystem-awareness-program"
  },
  {
    "title": "Financial Literacy Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Financial Literacy Awareness Program"
    ],
    "description": "Basic financial education and literacy.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "financial",
      "literacy",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "financial-literacy-awareness-program"
  },
  {
    "title": "Personal Finance Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Personal Finance Awareness Program"
    ],
    "description": "Managing personal finance and budgeting.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "personal",
      "finance",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "blue",
    "id": "personal-finance-awareness-program"
  },
  {
    "title": "Investment Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Investment Awareness Program"
    ],
    "description": "Awareness on safe investment strategies and risks.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "investment",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "investment-awareness-program"
  },
  {
    "title": "Chartered Accountancy Career Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Chartered Accountancy Career Awareness Program"
    ],
    "description": "Exploring career paths in chartered accountancy.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "chartered",
      "accountancy",
      "career",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "chartered-accountancy-career-awareness-program"
  },
  {
    "title": "Human Resources Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Human Resources Awareness Program"
    ],
    "description": "Career paths in HR and organizational management.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "human",
      "resources",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "violet",
    "id": "human-resources-awareness-program"
  },
  {
    "title": "Leadership & Teamwork Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Leadership & Teamwork Awareness Program"
    ],
    "description": "Building essential leadership and team skills.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "leadership",
      "teamwork",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "rose",
    "id": "leadership-teamwork-awareness-program"
  },
  {
    "title": "Career Development Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Career Development Awareness Program"
    ],
    "description": "General career planning and development strategies.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "career",
      "development",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "amber",
    "id": "career-development-awareness-program"
  },
  {
    "title": "Professional Communication Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Professional Communication Awareness Program"
    ],
    "description": "Developing professional communication skills.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "professional",
      "communication",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "professional-communication-awareness-program"
  },
  {
    "title": "Cyber Law Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Cyber Law Awareness Program"
    ],
    "description": "Understanding basic cyber laws and digital regulations.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "cyber",
      "law",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "blue",
    "id": "cyber-law-awareness-program"
  },
  {
    "title": "Digital Rights Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Digital Rights Awareness Program"
    ],
    "description": "Awareness of fundamental digital human rights.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "digital",
      "rights",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "digital-rights-awareness-program"
  },
  {
    "title": "Corporate Law Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Corporate Law Awareness Program"
    ],
    "description": "Introduction to corporate compliance and law.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "corporate",
      "law",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "corporate-law-awareness-program"
  },
  {
    "title": "Criminal Law Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Criminal Law Awareness Program"
    ],
    "description": "Basic understanding of criminal law processes.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "criminal",
      "law",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "violet",
    "id": "criminal-law-awareness-program"
  },
  {
    "title": "Legal Rights Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Legal Rights Awareness Program"
    ],
    "description": "General awareness on constitutional and legal rights.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "legal",
      "rights",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "rose",
    "id": "legal-rights-awareness-program"
  },
  {
    "title": "Cyber Crime Prevention Awareness Program",
    "category": "Courses & Training",
    "parent": "Awareness Programs Control",
    "hierarchy": [
      "Awareness Programs Control",
      "Cyber Crime Prevention Awareness Program"
    ],
    "description": "Proactive strategies for preventing cybercrimes.",
    "keywords": [
      "awareness programs control",
      "awareness",
      "section",
      "card",
      "cyber",
      "crime",
      "prevention",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "awareness"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "amber",
    "id": "cyber-crime-prevention-awareness-program"
  },
  {
    "title": "Cybersecurity Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Cybersecurity Research Program"
    ],
    "description": "Advanced research in core cybersecurity practices.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "cybersecurity",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "blue",
    "id": "cybersecurity-research-program"
  },
  {
    "title": "Ethical Hacking Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Ethical Hacking Research Program"
    ],
    "description": "Exploring new ethical hacking methodologies.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "ethical",
      "hacking",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "ethical-hacking-research-program"
  },
  {
    "title": "Penetration Testing Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Penetration Testing Research Program"
    ],
    "description": "Innovations in vulnerability assessment techniques.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "penetration",
      "testing",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "penetration-testing-research-program"
  },
  {
    "title": "Network Security Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Network Security Research Program"
    ],
    "description": "Research in securing advanced network protocols.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "network",
      "security",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "violet",
    "id": "network-security-research-program"
  },
  {
    "title": "Cloud Security Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Cloud Security Research Program"
    ],
    "description": "Addressing emerging threats in cloud environments.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "cloud",
      "security",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "rose",
    "id": "cloud-security-research-program"
  },
  {
    "title": "Application Security Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Application Security Research Program"
    ],
    "description": "Advancing software vulnerability mitigation.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "application",
      "security",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "amber",
    "id": "application-security-research-program"
  },
  {
    "title": "Malware Analysis Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Malware Analysis Research Program"
    ],
    "description": "Deep behavioral analysis of malicious code.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "malware",
      "analysis",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "malware-analysis-research-program"
  },
  {
    "title": "Threat Intelligence Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Threat Intelligence Research Program"
    ],
    "description": "Predictive modeling in cyber threat intelligence.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "threat",
      "intelligence",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "blue",
    "id": "threat-intelligence-research-program"
  },
  {
    "title": "Cyber Threat Hunting Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Cyber Threat Hunting Research Program"
    ],
    "description": "Developing proactive threat hunting strategies.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "cyber",
      "threat",
      "hunting",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "cyber-threat-hunting-research-program"
  },
  {
    "title": "Digital Forensics Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Digital Forensics Research Program"
    ],
    "description": "Advancements in post-incident data extraction.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "digital",
      "forensics",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "digital-forensics-research-program"
  },
  {
    "title": "OSINT Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "OSINT Research Program"
    ],
    "description": "Innovating Open Source Intelligence gathering.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "osint",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "violet",
    "id": "osint-research-program"
  },
  {
    "title": "Cyber Crime Investigation Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Cyber Crime Investigation Research Program"
    ],
    "description": "Methodologies for digital crime analysis.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "cyber",
      "crime",
      "investigation",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "rose",
    "id": "cyber-crime-investigation-research-program"
  },
  {
    "title": "Artificial Intelligence Research Program (AI)",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Artificial Intelligence Research Program (AI)"
    ],
    "description": "General AI research and theoretical foundations.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "artificial",
      "intelligence",
      "program",
      "(ai)",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "amber",
    "id": "artificial-intelligence-research-program-ai"
  },
  {
    "title": "Machine Learning Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Machine Learning Research Program"
    ],
    "description": "Advancing statistical models and learning algorithms.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "machine",
      "learning",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "machine-learning-research-program"
  },
  {
    "title": "Deep Learning Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Deep Learning Research Program"
    ],
    "description": "Research in neural networks and deep architectures.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "deep",
      "learning",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "blue",
    "id": "deep-learning-research-program"
  },
  {
    "title": "Generative AI Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Generative AI Research Program"
    ],
    "description": "Exploring capabilities of generative AI models.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "generative",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "generative-ai-research-program"
  },
  {
    "title": "Natural Language Processing Research Program (NLP)",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Natural Language Processing Research Program (NLP)"
    ],
    "description": "Research in human-computer linguistic interaction.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "natural",
      "language",
      "processing",
      "program",
      "(nlp)",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "natural-language-processing-research-program-nlp"
  },
  {
    "title": "Computer Vision Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Computer Vision Research Program"
    ],
    "description": "Advancements in digital image and video processing.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "computer",
      "vision",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "violet",
    "id": "computer-vision-research-program"
  },
  {
    "title": "Data Science Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Data Science Research Program"
    ],
    "description": "Novel approaches in big data and statistical analysis.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "data",
      "science",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "rose",
    "id": "data-science-research-program"
  },
  {
    "title": "Data Analytics Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Data Analytics Research Program"
    ],
    "description": "Innovations in data processing and visualization.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "data",
      "analytics",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "amber",
    "id": "data-analytics-research-program"
  },
  {
    "title": "Software Engineering Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Software Engineering Research Program"
    ],
    "description": "Researching modern software lifecycle paradigms.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "software",
      "engineering",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "software-engineering-research-program"
  },
  {
    "title": "Web Development Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Web Development Research Program"
    ],
    "description": "Exploring future frameworks and web standards.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "web",
      "development",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "blue",
    "id": "web-development-research-program"
  },
  {
    "title": "Mobile App Development Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Mobile App Development Research Program"
    ],
    "description": "Advancements in cross-platform mobile architectures.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "mobile",
      "app",
      "development",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "mobile-app-development-research-program"
  },
  {
    "title": "DevOps Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "DevOps Research Program"
    ],
    "description": "Researching CI/CD and infrastructure automation.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "devops",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "devops-research-program"
  },
  {
    "title": "Software Testing Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Software Testing Research Program"
    ],
    "description": "Innovations in automated QA and testing.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "software",
      "testing",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "violet",
    "id": "software-testing-research-program"
  },
  {
    "title": "Blockchain Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Blockchain Research Program"
    ],
    "description": "Advancing decentralized systems and cryptography.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "blockchain",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "rose",
    "id": "blockchain-research-program"
  },
  {
    "title": "Database Systems Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Database Systems Research Program"
    ],
    "description": "Research in scalable and secure database architectures.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "database",
      "systems",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "amber",
    "id": "database-systems-research-program"
  },
  {
    "title": "Cloud Computing Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Cloud Computing Research Program"
    ],
    "description": "Exploring serverless and distributed cloud computing.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "cloud",
      "computing",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "cloud-computing-research-program"
  },
  {
    "title": "UI/UX Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "UI/UX Research Program"
    ],
    "description": "Researching cognitive models in user interfaces.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "blue",
    "id": "ui-ux-research-program"
  },
  {
    "title": "Human Computer Interaction Research Program (HCI)",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Human Computer Interaction Research Program (HCI)"
    ],
    "description": "Studying physical and psychological HCI.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "human",
      "computer",
      "interaction",
      "program",
      "(hci)",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "human-computer-interaction-research-program-hci"
  },
  {
    "title": "Graphic Design Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Graphic Design Research Program"
    ],
    "description": "Evolution of visual communication and design.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "graphic",
      "design",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "graphic-design-research-program"
  },
  {
    "title": "Digital Media Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Digital Media Research Program"
    ],
    "description": "Researching consumption and impact of digital media.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "digital",
      "media",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "violet",
    "id": "digital-media-research-program"
  },
  {
    "title": "Digital Marketing Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Digital Marketing Research Program"
    ],
    "description": "Analyzing emerging trends in online marketing.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "digital",
      "marketing",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "rose",
    "id": "digital-marketing-research-program"
  },
  {
    "title": "Consumer Behavior Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Consumer Behavior Research Program"
    ],
    "description": "Studying psychological drivers of consumer choices.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "consumer",
      "behavior",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "amber",
    "id": "consumer-behavior-research-program"
  },
  {
    "title": "Market Research Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Market Research Research Program"
    ],
    "description": "Developing novel market analysis methodologies.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "market",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "market-research-research-program"
  },
  {
    "title": "Product Management Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Product Management Research Program"
    ],
    "description": "Research in product lifecycle and user-centric strategies.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "product",
      "management",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "blue",
    "id": "product-management-research-program"
  },
  {
    "title": "Business Strategy Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Business Strategy Research Program"
    ],
    "description": "Analyzing organizational planning and market expansion.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "business",
      "strategy",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "business-strategy-research-program"
  },
  {
    "title": "Entrepreneurship Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Entrepreneurship Research Program"
    ],
    "description": "Studying the dynamics of startups and innovation.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "entrepreneurship",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "entrepreneurship-research-program"
  },
  {
    "title": "Organizational Behavior Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Organizational Behavior Research Program"
    ],
    "description": "Research on workplace culture and employee dynamics.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "organizational",
      "behavior",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "violet",
    "id": "organizational-behavior-research-program"
  },
  {
    "title": "Financial Technology Research Program (FinTech)",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Financial Technology Research Program (FinTech)"
    ],
    "description": "Innovations in financial technology and digital banking.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "financial",
      "technology",
      "program",
      "(fintech)",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "rose",
    "id": "financial-technology-research-program-fintech"
  },
  {
    "title": "Financial Analysis Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Financial Analysis Research Program"
    ],
    "description": "Advanced techniques for financial modeling.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "financial",
      "analysis",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "amber",
    "id": "financial-analysis-research-program"
  },
  {
    "title": "Accounting Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Accounting Research Program"
    ],
    "description": "Researching regulatory compliance and accounting standards.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "accounting",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "accounting-research-program"
  },
  {
    "title": "Human Resource Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Human Resource Research Program"
    ],
    "description": "Future trends in talent management and HR.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "human",
      "resource",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "blue",
    "id": "human-resource-research-program"
  },
  {
    "title": "Cyber Law Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Cyber Law Research Program"
    ],
    "description": "Studying the evolution of global cyber regulations.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "cyber",
      "law",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "cyber-law-research-program"
  },
  {
    "title": "Corporate Law Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Corporate Law Research Program"
    ],
    "description": "Research in corporate governance and compliance.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "corporate",
      "law",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "corporate-law-research-program"
  },
  {
    "title": "Criminal Law Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Criminal Law Research Program"
    ],
    "description": "Analyzing systemic shifts in criminal justice.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "criminal",
      "law",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "violet",
    "id": "criminal-law-research-program"
  },
  {
    "title": "Digital Rights Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Digital Rights Research Program"
    ],
    "description": "Researching the protection of online human rights.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "digital",
      "rights",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "rose",
    "id": "digital-rights-research-program"
  },
  {
    "title": "Legal Policy Research Program",
    "category": "Courses & Training",
    "parent": "Research & Publications Control",
    "hierarchy": [
      "Research & Publications Control",
      "Legal Policy Research Program"
    ],
    "description": "Developing public policy and legal frameworks.",
    "keywords": [
      "research & publications control",
      "research",
      "section",
      "card",
      "legal",
      "policy",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "research"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "amber",
    "id": "legal-policy-research-program"
  },
  {
    "title": "Cybersecurity Career Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Cybersecurity Career Mentorship Program"
    ],
    "description": "Guidance and mentorship for cybersecurity careers.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "cybersecurity",
      "career",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "blue",
    "id": "cybersecurity-career-mentorship-program"
  },
  {
    "title": "Ethical Hacking Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Ethical Hacking Mentorship Program"
    ],
    "description": "Mentorship in offensive security and ethical hacking.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "ethical",
      "hacking",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "ethical-hacking-mentorship-program"
  },
  {
    "title": "Penetration Testing Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Penetration Testing Mentorship Program"
    ],
    "description": "Expert guidance on penetration testing methodologies.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "penetration",
      "testing",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "penetration-testing-mentorship-program"
  },
  {
    "title": "SOC Analyst Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "SOC Analyst Mentorship Program"
    ],
    "description": "Mentorship for Security Operations Center roles.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "soc",
      "analyst",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "violet",
    "id": "soc-analyst-mentorship-program"
  },
  {
    "title": "Network Security Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Network Security Mentorship Program"
    ],
    "description": "Career mentorship in network security and defense.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "network",
      "security",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "rose",
    "id": "network-security-mentorship-program"
  },
  {
    "title": "Cloud Security Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Cloud Security Mentorship Program"
    ],
    "description": "Guidance for cloud security architecture and operations.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "cloud",
      "security",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "amber",
    "id": "cloud-security-mentorship-program"
  },
  {
    "title": "Threat Intelligence Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Threat Intelligence Mentorship Program"
    ],
    "description": "Mentorship in threat hunting and intelligence gathering.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "threat",
      "intelligence",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "threat-intelligence-mentorship-program"
  },
  {
    "title": "Cyber Forensics Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Cyber Forensics Mentorship Program"
    ],
    "description": "Expert mentorship in digital forensics and analysis.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "cyber",
      "forensics",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "blue",
    "id": "cyber-forensics-mentorship-program"
  },
  {
    "title": "Cyber Crime Investigation Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Cyber Crime Investigation Mentorship Program"
    ],
    "description": "Guidance on digital crime investigation techniques.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "cyber",
      "crime",
      "investigation",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "cyber-crime-investigation-mentorship-program"
  },
  {
    "title": "Cyber Law Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Cyber Law Mentorship Program"
    ],
    "description": "Mentorship for careers in cyber law and policy.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "cyber",
      "law",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "cyber-law-mentorship-program"
  },
  {
    "title": "Data Analytics Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Data Analytics Mentorship Program"
    ],
    "description": "Guidance in data processing and visualization.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "data",
      "analytics",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "violet",
    "id": "data-analytics-mentorship-program"
  },
  {
    "title": "Data Science Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Data Science Mentorship Program"
    ],
    "description": "Mentorship in advanced data science and statistics.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "data",
      "science",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "rose",
    "id": "data-science-mentorship-program"
  },
  {
    "title": "Artificial Intelligence (AI) Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Artificial Intelligence (AI) Mentorship Program"
    ],
    "description": "Career guidance in artificial intelligence.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "artificial",
      "intelligence",
      "(ai)",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "amber",
    "id": "artificial-intelligence-ai-mentorship-program"
  },
  {
    "title": "Machine Learning Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Machine Learning Mentorship Program"
    ],
    "description": "Mentorship for machine learning models and engineering.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "machine",
      "learning",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "machine-learning-mentorship-program"
  },
  {
    "title": "Generative AI Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Generative AI Mentorship Program"
    ],
    "description": "Guidance on generative AI development and application.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "generative",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "blue",
    "id": "generative-ai-mentorship-program"
  },
  {
    "title": "Prompt Engineering Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Prompt Engineering Mentorship Program"
    ],
    "description": "Mentorship in optimizing AI prompt interactions.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "prompt",
      "engineering",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "prompt-engineering-mentorship-program"
  },
  {
    "title": "Business Analytics Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Business Analytics Mentorship Program"
    ],
    "description": "Guidance on aligning data with business strategies.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "business",
      "analytics",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "business-analytics-mentorship-program"
  },
  {
    "title": "Deep Learning Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Deep Learning Mentorship Program"
    ],
    "description": "Advanced mentorship in neural networks and deep learning.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "deep",
      "learning",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "violet",
    "id": "deep-learning-mentorship-program"
  },
  {
    "title": "Software Development Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Software Development Mentorship Program"
    ],
    "description": "Mentorship across the software engineering lifecycle.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "software",
      "development",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "rose",
    "id": "software-development-mentorship-program"
  },
  {
    "title": "Full Stack Development Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Full Stack Development Mentorship Program"
    ],
    "description": "Guidance for frontend and backend web development.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "full",
      "stack",
      "development",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "amber",
    "id": "full-stack-development-mentorship-program"
  },
  {
    "title": "Web Development Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Web Development Mentorship Program"
    ],
    "description": "Career mentorship for modern web development.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "web",
      "development",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "web-development-mentorship-program"
  },
  {
    "title": "Mobile App Development Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Mobile App Development Mentorship Program"
    ],
    "description": "Mentorship in cross-platform mobile application development.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "mobile",
      "app",
      "development",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "blue",
    "id": "mobile-app-development-mentorship-program"
  },
  {
    "title": "iOS Development Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "iOS Development Mentorship Program"
    ],
    "description": "Specialized mentorship for Apple iOS ecosystem.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "ios",
      "development",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "ios-development-mentorship-program"
  },
  {
    "title": "DevOps Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "DevOps Mentorship Program"
    ],
    "description": "Guidance on CI/CD pipelines and infrastructure automation.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "devops",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "devops-mentorship-program"
  },
  {
    "title": "Software Testing & QA Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Software Testing & QA Mentorship Program"
    ],
    "description": "Mentorship in automated software testing and QA.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "software",
      "testing",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "violet",
    "id": "software-testing-qa-mentorship-program"
  },
  {
    "title": "Database Administration (DBA) Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Database Administration (DBA) Mentorship Program"
    ],
    "description": "Guidance for database architecture and management.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "database",
      "administration",
      "(dba)",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "rose",
    "id": "database-administration-dba-mentorship-program"
  },
  {
    "title": "Blockchain Development Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Blockchain Development Mentorship Program"
    ],
    "description": "Mentorship in decentralized applications and smart contracts.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "blockchain",
      "development",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "amber",
    "id": "blockchain-development-mentorship-program"
  },
  {
    "title": "UI/UX Design Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "UI/UX Design Mentorship Program"
    ],
    "description": "Guidance in user interface and experience design.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "design",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "ui-ux-design-mentorship-program"
  },
  {
    "title": "Graphic Design Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Graphic Design Mentorship Program"
    ],
    "description": "Career mentorship in digital graphic design.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "graphic",
      "design",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "blue",
    "id": "graphic-design-mentorship-program"
  },
  {
    "title": "Product Design Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Product Design Mentorship Program"
    ],
    "description": "Mentorship in product design lifecycle and strategy.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "product",
      "design",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "product-design-mentorship-program"
  },
  {
    "title": "Content Writing Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Content Writing Mentorship Program"
    ],
    "description": "Guidance for professional copywriting and content strategy.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "content",
      "writing",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "content-writing-mentorship-program"
  },
  {
    "title": "Digital Marketing Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Digital Marketing Mentorship Program"
    ],
    "description": "Mentorship in online marketing and campaign management.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "digital",
      "marketing",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "violet",
    "id": "digital-marketing-mentorship-program"
  },
  {
    "title": "SEO Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "SEO Mentorship Program"
    ],
    "description": "Guidance on search engine optimization and ranking strategies.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "seo",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "rose",
    "id": "seo-mentorship-program"
  },
  {
    "title": "Social Media Marketing Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Social Media Marketing Mentorship Program"
    ],
    "description": "Mentorship in building social media presence and engagement.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "social",
      "media",
      "marketing",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "amber",
    "id": "social-media-marketing-mentorship-program"
  },
  {
    "title": "Product Management Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Product Management Mentorship Program"
    ],
    "description": "Guidance for product lifecycles and agile management.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "product",
      "management",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "product-management-mentorship-program"
  },
  {
    "title": "Business Development Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Business Development Mentorship Program"
    ],
    "description": "Mentorship in sales, partnerships, and business growth.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "business",
      "development",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "blue",
    "id": "business-development-mentorship-program"
  },
  {
    "title": "Entrepreneurship Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Entrepreneurship Mentorship Program"
    ],
    "description": "Guidance for founders on starting and managing ventures.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "entrepreneurship",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "entrepreneurship-mentorship-program"
  },
  {
    "title": "Startup Growth Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Startup Growth Mentorship Program"
    ],
    "description": "Mentorship in scaling startups and navigating ecosystems.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "startup",
      "growth",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "startup-growth-mentorship-program"
  },
  {
    "title": "Brand Management Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Brand Management Mentorship Program"
    ],
    "description": "Guidance on building and sustaining brand identity.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "brand",
      "management",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "violet",
    "id": "brand-management-mentorship-program"
  },
  {
    "title": "Finance & Accounting Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Finance & Accounting Mentorship Program"
    ],
    "description": "Mentorship in corporate finance and accounting practices.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "finance",
      "accounting",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "rose",
    "id": "finance-accounting-mentorship-program"
  },
  {
    "title": "Finance & Accounting Mentorship Program (Advanced)",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Finance & Accounting Mentorship Program (Advanced)"
    ],
    "description": "Advanced mentorship in corporate finance and accounting practices.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "finance",
      "accounting",
      "program",
      "(advanced)",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "amber",
    "id": "finance-accounting-mentorship-program-advanced"
  },
  {
    "title": "Financial Analysis Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Financial Analysis Mentorship Program"
    ],
    "description": "Guidance in financial modeling and investment analysis.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "financial",
      "analysis",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "financial-analysis-mentorship-program"
  },
  {
    "title": "Chartered Accountancy Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Chartered Accountancy Mentorship Program"
    ],
    "description": "Mentorship for pursuing and succeeding in chartered accountancy.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "chartered",
      "accountancy",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "blue",
    "id": "chartered-accountancy-mentorship-program"
  },
  {
    "title": "Human Resources Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Human Resources Mentorship Program"
    ],
    "description": "Career guidance in talent management and organizational culture.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "human",
      "resources",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "human-resources-mentorship-program"
  },
  {
    "title": "Journalism & Media Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Journalism & Media Mentorship Program"
    ],
    "description": "Mentorship in reporting, media studies, and journalism.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "journalism",
      "media",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "journalism-media-mentorship-program"
  },
  {
    "title": "Professional Communication Mentorship",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Professional Communication Mentorship"
    ],
    "description": "Guidance for developing professional and corporate communication skills.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "professional",
      "communication",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "violet",
    "id": "professional-communication-mentorship"
  },
  {
    "title": "Legal Research Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Legal Research Mentorship Program"
    ],
    "description": "Mentorship in comprehensive legal research methodologies.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "legal",
      "research",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "rose",
    "id": "legal-research-mentorship-program"
  },
  {
    "title": "Corporate Law Mentorship Program",
    "category": "Courses & Training",
    "parent": "Mentorship Programs Control",
    "hierarchy": [
      "Mentorship Programs Control",
      "Corporate Law Mentorship Program"
    ],
    "description": "Guidance on corporate legal structures and compliance.",
    "keywords": [
      "mentorship programs control",
      "mentorship",
      "section",
      "card",
      "corporate",
      "law",
      "program",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "mentorship"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "amber",
    "id": "corporate-law-mentorship-program"
  },
  {
    "title": "Leadership Development Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Leadership Development Training"
    ],
    "description": "Training programs for emerging and current leaders.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "leadership",
      "development",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "blue",
    "id": "leadership-development-training"
  },
  {
    "title": "Executive Leadership Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Executive Leadership Training"
    ],
    "description": "Advanced leadership training for C-level executives.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "executive",
      "leadership",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "executive-leadership-training"
  },
  {
    "title": "Strategic Management Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Strategic Management Training"
    ],
    "description": "Training on business strategy and long-term planning.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "strategic",
      "management",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "strategic-management-training"
  },
  {
    "title": "Project Management Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Project Management Training"
    ],
    "description": "Methodologies for effective project execution.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "project",
      "management",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "violet",
    "id": "project-management-training"
  },
  {
    "title": "Change Management Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Change Management Training"
    ],
    "description": "Guiding organizations through structural changes.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "change",
      "management",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "rose",
    "id": "change-management-training"
  },
  {
    "title": "Decision-Making Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Decision-Making Training"
    ],
    "description": "Analytical models for effective decision making.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "decision",
      "making",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "amber",
    "id": "decision-making-training"
  },
  {
    "title": "Business Communication Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Business Communication Training"
    ],
    "description": "Effective written and verbal business communication.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "business",
      "communication",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "business-communication-training"
  },
  {
    "title": "Professional Communication Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Professional Communication Training"
    ],
    "description": "Advanced training in corporate communication.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "professional",
      "communication",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "blue",
    "id": "professional-communication-training"
  },
  {
    "title": "Corporate Etiquette Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Corporate Etiquette Training"
    ],
    "description": "Standards and behavior in corporate environments.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "etiquette",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "corporate-etiquette-training"
  },
  {
    "title": "Workplace Ethics Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Workplace Ethics Training"
    ],
    "description": "Maintaining integrity and ethics in the workplace.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "workplace",
      "ethics",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "workplace-ethics-training"
  },
  {
    "title": "Team Building Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Team Building Training"
    ],
    "description": "Strategies for fostering collaborative teams.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "team",
      "building",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "violet",
    "id": "team-building-training"
  },
  {
    "title": "Conflict Resolution Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Conflict Resolution Training"
    ],
    "description": "Techniques for resolving workplace disputes.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "conflict",
      "resolution",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "rose",
    "id": "conflict-resolution-training"
  },
  {
    "title": "Negotiation Skills Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Negotiation Skills Training"
    ],
    "description": "Training in effective business negotiations.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "negotiation",
      "skills",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "amber",
    "id": "negotiation-skills-training"
  },
  {
    "title": "Critical Thinking Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Critical Thinking Training"
    ],
    "description": "Developing analytical and critical thinking skills.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "critical",
      "thinking",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "critical-thinking-training"
  },
  {
    "title": "Problem-Solving Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Problem-Solving Training"
    ],
    "description": "Methodologies for creative problem resolution.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "problem",
      "solving",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "blue",
    "id": "problem-solving-training"
  },
  {
    "title": "Time Management Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Time Management Training"
    ],
    "description": "Maximizing productivity and managing time effectively.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "time",
      "management",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "time-management-training"
  },
  {
    "title": "Stress Management Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Stress Management Training"
    ],
    "description": "Techniques for managing workplace stress.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "stress",
      "management",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "stress-management-training"
  },
  {
    "title": "Emotional Intelligence Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Emotional Intelligence Training"
    ],
    "description": "Developing self-awareness and emotional intelligence.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "emotional",
      "intelligence",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "violet",
    "id": "emotional-intelligence-training"
  },
  {
    "title": "Human Resource Management Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Human Resource Management Training"
    ],
    "description": "Core practices in managing human capital.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "human",
      "resource",
      "management",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "rose",
    "id": "human-resource-management-training"
  },
  {
    "title": "Talent Acquisition Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Talent Acquisition Training"
    ],
    "description": "Strategies for recruiting and acquiring top talent.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "talent",
      "acquisition",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "amber",
    "id": "talent-acquisition-training"
  },
  {
    "title": "Employee Engagement Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Employee Engagement Training"
    ],
    "description": "Techniques for motivating and engaging employees.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "employee",
      "engagement",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "employee-engagement-training"
  },
  {
    "title": "Performance Management Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Performance Management Training"
    ],
    "description": "Systems for evaluating and improving performance.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "performance",
      "management",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "blue",
    "id": "performance-management-training"
  },
  {
    "title": "Product Management Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Product Management Training"
    ],
    "description": "Lifecycle management for products and services.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "product",
      "management",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "product-management-training"
  },
  {
    "title": "Business Development Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Business Development Training"
    ],
    "description": "Strategies for sales and corporate partnerships.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "business",
      "development",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "business-development-training"
  },
  {
    "title": "Sales Excellence Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Sales Excellence Training"
    ],
    "description": "Advanced training for sales teams and leadership.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "sales",
      "excellence",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "violet",
    "id": "sales-excellence-training"
  },
  {
    "title": "Customer Relationship Management Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Customer Relationship Management Training"
    ],
    "description": "Training on CRM tools and customer retention.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "customer",
      "relationship",
      "management",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "rose",
    "id": "customer-relationship-management-training"
  },
  {
    "title": "Entrepreneurship & Innovation Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Entrepreneurship & Innovation Training"
    ],
    "description": "Fostering internal innovation and intrapreneurship.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "entrepreneurship",
      "innovation",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "amber",
    "id": "entrepreneurship-innovation-training"
  },
  {
    "title": "Digital Marketing Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Digital Marketing Training"
    ],
    "description": "Corporate strategies for digital marketing.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "digital",
      "marketing",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "digital-marketing-training"
  },
  {
    "title": "Brand Management Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Brand Management Training"
    ],
    "description": "Sustaining and growing corporate brand identity.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "brand",
      "management",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "blue",
    "id": "brand-management-training"
  },
  {
    "title": "Content Marketing Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Content Marketing Training"
    ],
    "description": "Creating strategic content for corporate branding.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "content",
      "marketing",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "content-marketing-training"
  },
  {
    "title": "Financial Management Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Financial Management Training"
    ],
    "description": "Training in managing corporate financial resources.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "financial",
      "management",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "financial-management-training"
  },
  {
    "title": "Corporate Finance Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Corporate Finance Training"
    ],
    "description": "Advanced corporate finance and investment strategies.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "finance",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "violet",
    "id": "corporate-finance-training"
  },
  {
    "title": "Financial Analysis Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Financial Analysis Training"
    ],
    "description": "Techniques for financial modeling and analysis.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "financial",
      "analysis",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "rose",
    "id": "financial-analysis-training"
  },
  {
    "title": "Risk Management Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Risk Management Training"
    ],
    "description": "Identifying and mitigating corporate risks.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "risk",
      "management",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "amber",
    "id": "risk-management-training"
  },
  {
    "title": "Data Analytics for Business Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Data Analytics for Business Training"
    ],
    "description": "Using data processing for business intelligence.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "data",
      "analytics",
      "for",
      "business",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "data-analytics-for-business-training"
  },
  {
    "title": "Business Intelligence Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Business Intelligence Training"
    ],
    "description": "Leveraging BI tools for corporate decision making.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "business",
      "intelligence",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "blue",
    "id": "business-intelligence-training"
  },
  {
    "title": "Artificial Intelligence (AI) for Business Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Artificial Intelligence (AI) for Business Training"
    ],
    "description": "Implementing AI solutions in corporate operations.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "artificial",
      "intelligence",
      "(ai)",
      "for",
      "business",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "artificial-intelligence-ai-for-business-training"
  },
  {
    "title": "Generative AI in the Workplace Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Generative AI in the Workplace Training"
    ],
    "description": "Using generative AI tools for productivity.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "generative",
      "the",
      "workplace",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "generative-ai-in-the-workplace-training"
  },
  {
    "title": "Cloud Computing Fundamentals Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Cloud Computing Fundamentals Training"
    ],
    "description": "Corporate transition to cloud-based infrastructure.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "cloud",
      "computing",
      "fundamentals",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "violet",
    "id": "cloud-computing-fundamentals-training"
  },
  {
    "title": "Digital Transformation Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Digital Transformation Training"
    ],
    "description": "Guiding enterprise-wide digital transitions.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "digital",
      "transformation",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "rose",
    "id": "digital-transformation-training"
  },
  {
    "title": "DevOps for Enterprises Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "DevOps for Enterprises Training"
    ],
    "description": "Implementing DevOps practices at enterprise scale.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "devops",
      "for",
      "enterprises",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "amber",
    "id": "devops-for-enterprises-training"
  },
  {
    "title": "Software Quality Assurance (QA) Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Software Quality Assurance (QA) Training"
    ],
    "description": "Corporate training in software testing and QA.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "software",
      "quality",
      "assurance",
      "(qa)",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "software-quality-assurance-qa-training"
  },
  {
    "title": "Cybersecurity Awareness Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Cybersecurity Awareness Training"
    ],
    "description": "Corporate-wide security awareness and training.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "cybersecurity",
      "awareness",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "blue",
    "id": "cybersecurity-awareness-training"
  },
  {
    "title": "Information Security Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Information Security Training"
    ],
    "description": "Securing corporate data and information assets.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "information",
      "security",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "information-security-training"
  },
  {
    "title": "Data Privacy & Compliance Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Data Privacy & Compliance Training"
    ],
    "description": "Ensuring adherence to data privacy regulations.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "data",
      "privacy",
      "compliance",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "data-privacy-compliance-training"
  },
  {
    "title": "Cyber Risk Management Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Cyber Risk Management Training"
    ],
    "description": "Evaluating and managing organizational cyber risks.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "cyber",
      "risk",
      "management",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "violet",
    "id": "cyber-risk-management-training"
  },
  {
    "title": "Corporate Law & Compliance Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Corporate Law & Compliance Training"
    ],
    "description": "Navigating corporate legal structures and compliance.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "law",
      "compliance",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "rose",
    "id": "corporate-law-compliance-training"
  },
  {
    "title": "Legal Risk Management Training",
    "category": "Courses & Training",
    "parent": "Corporate Training Control",
    "hierarchy": [
      "Corporate Training Control",
      "Legal Risk Management Training"
    ],
    "description": "Identifying and mitigating corporate legal risks.",
    "keywords": [
      "corporate training control",
      "corporate",
      "section",
      "card",
      "legal",
      "risk",
      "management",
      "training",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "corporate"
    },
    "iconName": "Building2",
    "badge": "Section Card",
    "theme": "amber",
    "id": "legal-risk-management-training"
  },
  {
    "title": "Cybersecurity Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Cybersecurity Hackathon"
    ],
    "description": "Competitive challenges in core cybersecurity practices.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "cybersecurity",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "blue",
    "id": "cybersecurity-hackathon"
  },
  {
    "title": "Ethical Hacking Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Ethical Hacking Hackathon"
    ],
    "description": "Challenges in offensive security and ethical hacking.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "ethical",
      "hacking",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "ethical-hacking-hackathon"
  },
  {
    "title": "Penetration Testing Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Penetration Testing Hackathon"
    ],
    "description": "Vulnerability assessment and penetration testing challenges.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "penetration",
      "testing",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "penetration-testing-hackathon"
  },
  {
    "title": "Network Security Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Network Security Hackathon"
    ],
    "description": "Securing complex networks and defense mechanisms.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "network",
      "security",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "violet",
    "id": "network-security-hackathon"
  },
  {
    "title": "Cloud Security Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Cloud Security Hackathon"
    ],
    "description": "Addressing threats and vulnerabilities in cloud environments.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "cloud",
      "security",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "rose",
    "id": "cloud-security-hackathon"
  },
  {
    "title": "SOC Analyst Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "SOC Analyst Hackathon"
    ],
    "description": "Real-time security operations and incident monitoring.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "soc",
      "analyst",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "amber",
    "id": "soc-analyst-hackathon"
  },
  {
    "title": "Threat Intelligence Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Threat Intelligence Hackathon"
    ],
    "description": "Gathering and modeling cyber threat intelligence.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "threat",
      "intelligence",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "threat-intelligence-hackathon"
  },
  {
    "title": "Cyber Forensics Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Cyber Forensics Hackathon"
    ],
    "description": "Digital forensics and evidence extraction challenges.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "cyber",
      "forensics",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "blue",
    "id": "cyber-forensics-hackathon"
  },
  {
    "title": "OSINT Challenge Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "OSINT Challenge Hackathon"
    ],
    "description": "Advanced Open Source Intelligence gathering competitions.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "osint",
      "challenge",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "osint-challenge-hackathon"
  },
  {
    "title": "Cyber Crime Investigation Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Cyber Crime Investigation Hackathon"
    ],
    "description": "Solving complex digital crime investigation scenarios.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "cyber",
      "crime",
      "investigation",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "cyber-crime-investigation-hackathon"
  },
  {
    "title": "Malware Analysis Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Malware Analysis Hackathon"
    ],
    "description": "Analyzing and reversing complex malicious code.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "malware",
      "analysis",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "violet",
    "id": "malware-analysis-hackathon"
  },
  {
    "title": "Cyber Threat Hunting Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Cyber Threat Hunting Hackathon"
    ],
    "description": "Proactive detection and neutralization of cyber threats.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "cyber",
      "threat",
      "hunting",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "rose",
    "id": "cyber-threat-hunting-hackathon"
  },
  {
    "title": "Artificial Intelligence (AI) Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Artificial Intelligence (AI) Hackathon"
    ],
    "description": "Building general AI solutions and theoretical models.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "artificial",
      "intelligence",
      "(ai)",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "amber",
    "id": "artificial-intelligence-ai-hackathon"
  },
  {
    "title": "Machine Learning Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Machine Learning Hackathon"
    ],
    "description": "Developing predictive machine learning algorithms.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "machine",
      "learning",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "machine-learning-hackathon"
  },
  {
    "title": "Generative AI Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Generative AI Hackathon"
    ],
    "description": "Creating solutions utilizing generative AI models.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "generative",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "blue",
    "id": "generative-ai-hackathon"
  },
  {
    "title": "Prompt Engineering Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Prompt Engineering Hackathon"
    ],
    "description": "Optimizing and engineering advanced AI interactions.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "prompt",
      "engineering",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "prompt-engineering-hackathon"
  },
  {
    "title": "Data Science Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Data Science Hackathon"
    ],
    "description": "Solving big data challenges through statistical analysis.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "data",
      "science",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "data-science-hackathon"
  },
  {
    "title": "Data Analytics Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Data Analytics Hackathon"
    ],
    "description": "Visualizing and analyzing complex data structures.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "data",
      "analytics",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "violet",
    "id": "data-analytics-hackathon"
  },
  {
    "title": "Business Analytics Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Business Analytics Hackathon"
    ],
    "description": "Aligning data insights with corporate business strategy.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "business",
      "analytics",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "rose",
    "id": "business-analytics-hackathon"
  },
  {
    "title": "Deep Learning Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Deep Learning Hackathon"
    ],
    "description": "Building neural networks and deep architecture models.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "deep",
      "learning",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "amber",
    "id": "deep-learning-hackathon"
  },
  {
    "title": "Software Development Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Software Development Hackathon"
    ],
    "description": "Creating comprehensive software engineering solutions.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "software",
      "development",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "software-development-hackathon"
  },
  {
    "title": "Full Stack Development Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Full Stack Development Hackathon"
    ],
    "description": "Building complete frontend and backend web applications.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "full",
      "stack",
      "development",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "blue",
    "id": "full-stack-development-hackathon"
  },
  {
    "title": "Web Development Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Web Development Hackathon"
    ],
    "description": "Innovating with modern web frameworks and standards.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "web",
      "development",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "web-development-hackathon"
  },
  {
    "title": "Mobile App Development Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Mobile App Development Hackathon"
    ],
    "description": "Developing cross-platform mobile applications.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "mobile",
      "app",
      "development",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "mobile-app-development-hackathon"
  },
  {
    "title": "iOS Development Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "iOS Development Hackathon"
    ],
    "description": "Building specialized applications for the Apple ecosystem.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "ios",
      "development",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "violet",
    "id": "ios-development-hackathon"
  },
  {
    "title": "DevOps Innovation Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "DevOps Innovation Hackathon"
    ],
    "description": "Automating CI/CD pipelines and cloud infrastructure.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "devops",
      "innovation",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "rose",
    "id": "devops-innovation-hackathon"
  },
  {
    "title": "Blockchain Development Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Blockchain Development Hackathon"
    ],
    "description": "Creating decentralized applications and smart contracts.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "blockchain",
      "development",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "amber",
    "id": "blockchain-development-hackathon"
  },
  {
    "title": "Database Engineering Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Database Engineering Hackathon"
    ],
    "description": "Designing scalable and secure database architectures.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "database",
      "engineering",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "database-engineering-hackathon"
  },
  {
    "title": "Cloud Computing Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Cloud Computing Hackathon"
    ],
    "description": "Building scalable cloud-native applications and services.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "cloud",
      "computing",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "blue",
    "id": "cloud-computing-hackathon"
  },
  {
    "title": "API Development Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "API Development Hackathon"
    ],
    "description": "Designing robust and secure RESTful APIs.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "api",
      "development",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "api-development-hackathon"
  },
  {
    "title": "UI/UX Design Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "UI/UX Design Hackathon"
    ],
    "description": "Designing intuitive user interfaces and experiences.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "design",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "ui-ux-design-hackathon"
  },
  {
    "title": "Product Design Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Product Design Hackathon"
    ],
    "description": "Managing the product design lifecycle from concept to prototype.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "product",
      "design",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "violet",
    "id": "product-design-hackathon"
  },
  {
    "title": "Graphic Design Challenge Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Graphic Design Challenge Hackathon"
    ],
    "description": "Creating visual branding and digital graphic solutions.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "graphic",
      "design",
      "challenge",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "rose",
    "id": "graphic-design-challenge-hackathon"
  },
  {
    "title": "Digital Innovation Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Digital Innovation Hackathon"
    ],
    "description": "Developing cutting-edge digital products and solutions.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "digital",
      "innovation",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "amber",
    "id": "digital-innovation-hackathon"
  },
  {
    "title": "Digital Marketing Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Digital Marketing Hackathon"
    ],
    "description": "Creating comprehensive online marketing campaigns.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "digital",
      "marketing",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "digital-marketing-hackathon"
  },
  {
    "title": "Growth Marketing Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Growth Marketing Hackathon"
    ],
    "description": "Innovating growth strategies and user acquisition models.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "growth",
      "marketing",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "blue",
    "id": "growth-marketing-hackathon"
  },
  {
    "title": "Content Creation Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Content Creation Hackathon"
    ],
    "description": "Producing engaging multimedia and written content.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "content",
      "creation",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "content-creation-hackathon"
  },
  {
    "title": "Startup Innovation Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Startup Innovation Hackathon"
    ],
    "description": "Building and pitching scalable startup ideas.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "startup",
      "innovation",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "startup-innovation-hackathon"
  },
  {
    "title": "Entrepreneurship Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Entrepreneurship Hackathon"
    ],
    "description": "Founding and managing new entrepreneurial ventures.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "entrepreneurship",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "violet",
    "id": "entrepreneurship-hackathon"
  },
  {
    "title": "Product Management Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Product Management Hackathon"
    ],
    "description": "Strategizing product lifecycles and user roadmaps.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "product",
      "management",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "rose",
    "id": "product-management-hackathon"
  },
  {
    "title": "Business Development Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Business Development Hackathon"
    ],
    "description": "Developing sales strategies and corporate partnerships.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "business",
      "development",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "amber",
    "id": "business-development-hackathon"
  },
  {
    "title": "Financial Technology (FinTech) Innovation Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Financial Technology (FinTech) Innovation Hackathon"
    ],
    "description": "Innovating digital banking and financial technology solutions.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "financial",
      "technology",
      "(fintech)",
      "innovation",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "financial-technology-fintech-innovation-hackathon"
  },
  {
    "title": "Cyber Law Innovation Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Cyber Law Innovation Hackathon"
    ],
    "description": "Creating legal tech solutions for cyber regulations.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "cyber",
      "law",
      "innovation",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "blue",
    "id": "cyber-law-innovation-hackathon"
  },
  {
    "title": "Legal Technology Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Legal Technology Hackathon"
    ],
    "description": "Innovating technology for legal research and compliance.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "legal",
      "technology",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "legal-technology-hackathon"
  },
  {
    "title": "Digital Rights Innovation Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Digital Rights Innovation Hackathon"
    ],
    "description": "Developing platforms to protect online human rights.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "digital",
      "rights",
      "innovation",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "digital-rights-innovation-hackathon"
  },
  {
    "title": "Smart City Innovation Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Smart City Innovation Hackathon"
    ],
    "description": "Building technologies for intelligent urban environments.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "smart",
      "city",
      "innovation",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "violet",
    "id": "smart-city-innovation-hackathon"
  },
  {
    "title": "Sustainable Technology Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Sustainable Technology Hackathon"
    ],
    "description": "Creating eco-friendly and sustainable tech solutions.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "sustainable",
      "technology",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "rose",
    "id": "sustainable-technology-hackathon"
  },
  {
    "title": "Future Tech Innovation Hackathon",
    "category": "Courses & Training",
    "parent": "Hackathons & Contests Control",
    "hierarchy": [
      "Hackathons & Contests Control",
      "Future Tech Innovation Hackathon"
    ],
    "description": "Exploring speculative and futuristic technology models.",
    "keywords": [
      "hackathons & contests control",
      "hackathons",
      "section",
      "card",
      "future",
      "tech",
      "innovation",
      "hackathon",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "hackathons"
    },
    "iconName": "Zap",
    "badge": "Section Card",
    "theme": "amber",
    "id": "future-tech-innovation-hackathon"
  },
  {
    "title": "Current Vacancy",
    "category": "Management Controls",
    "parent": "Careers Management Control",
    "hierarchy": [
      "Careers Management Control",
      "Current Vacancy"
    ],
    "description": "Manage current job openings and vacancies.",
    "keywords": [
      "careers management control",
      "careers",
      "section",
      "card",
      "current",
      "vacancy",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "blue",
    "id": "current-vacancy"
  },
  {
    "title": "Recruitment Rules/Policies",
    "category": "Management Controls",
    "parent": "Careers Management Control",
    "hierarchy": [
      "Careers Management Control",
      "Recruitment Rules/Policies"
    ],
    "description": "Manage recruitment guidelines and employee policies.",
    "keywords": [
      "careers management control",
      "careers",
      "section",
      "card",
      "recruitment",
      "rules",
      "policies",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "recruitment-rules-policies"
  },
  {
    "title": "Recruitment Advertisements",
    "category": "Management Controls",
    "parent": "Careers Management Control",
    "hierarchy": [
      "Careers Management Control",
      "Recruitment Advertisements"
    ],
    "description": "Manage job postings and recruitment ads.",
    "keywords": [
      "careers management control",
      "careers",
      "section",
      "card",
      "recruitment",
      "advertisements",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "recruitment-advertisements"
  },
  {
    "title": "Press Release and Notices",
    "category": "Management Controls",
    "parent": "Careers Management Control",
    "hierarchy": [
      "Careers Management Control",
      "Press Release and Notices"
    ],
    "description": "Manage press releases and public recruitment notices.",
    "keywords": [
      "careers management control",
      "careers",
      "section",
      "card",
      "press",
      "release",
      "and",
      "notices",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "violet",
    "id": "press-release-and-notices"
  },
  {
    "title": "Submit Resume",
    "category": "Management Controls",
    "parent": "Careers Management Control",
    "hierarchy": [
      "Careers Management Control",
      "Submit Resume"
    ],
    "description": "Manage candidate resume submissions and tracking.",
    "keywords": [
      "careers management control",
      "careers",
      "section",
      "card",
      "submit",
      "resume",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers"
    },
    "iconName": "Briefcase",
    "badge": "Section Card",
    "theme": "rose",
    "id": "submit-resume"
  },
  {
    "title": "Job Vacancy",
    "category": "Management Controls",
    "parent": "Job Vacancies Desk",
    "hierarchy": [
      "Job Vacancies Desk",
      "Job Vacancy"
    ],
    "description": "Manage open job vacancies.",
    "keywords": [
      "job vacancies desk",
      "careers-vacancy",
      "section",
      "card",
      "job",
      "vacancy",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers-vacancy"
    },
    "iconName": "FileText",
    "badge": "Section Card",
    "theme": "blue",
    "id": "job-vacancy"
  },
  {
    "title": "Post Vacancy",
    "category": "Management Controls",
    "parent": "Job Vacancies Desk",
    "hierarchy": [
      "Job Vacancies Desk",
      "Post Vacancy"
    ],
    "description": "Create and post new job vacancies.",
    "keywords": [
      "job vacancies desk",
      "careers-vacancy",
      "section",
      "card",
      "post",
      "vacancy",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers-vacancy"
    },
    "iconName": "FileText",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "post-vacancy"
  },
  {
    "title": "Vacancy Card 1",
    "category": "Management Controls",
    "parent": "Job Vacancies Desk",
    "hierarchy": [
      "Job Vacancies Desk",
      "Vacancy Card 1"
    ],
    "description": "Detailed view of vacancy group 1.",
    "keywords": [
      "job vacancies desk",
      "careers-vacancy",
      "section",
      "card",
      "vacancy",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers-vacancy"
    },
    "iconName": "FileText",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "vacancy-card-1"
  },
  {
    "title": "Vacancy Card 2",
    "category": "Management Controls",
    "parent": "Job Vacancies Desk",
    "hierarchy": [
      "Job Vacancies Desk",
      "Vacancy Card 2"
    ],
    "description": "Detailed view of vacancy group 2.",
    "keywords": [
      "job vacancies desk",
      "careers-vacancy",
      "section",
      "card",
      "vacancy",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers-vacancy"
    },
    "iconName": "FileText",
    "badge": "Section Card",
    "theme": "violet",
    "id": "vacancy-card-2"
  },
  {
    "title": "Recruitment Policy and Employment Overview",
    "category": "Management Controls",
    "parent": "Recruitment Policies Desk",
    "hierarchy": [
      "Recruitment Policies Desk",
      "Recruitment Policy and Employment Overview"
    ],
    "description": "Overview of employment policies.",
    "keywords": [
      "recruitment policies desk",
      "careers-policies",
      "section",
      "card",
      "recruitment",
      "policy",
      "and",
      "employment",
      "overview",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers-policies"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "blue",
    "id": "recruitment-policy-and-employment-overview"
  },
  {
    "title": "Career Development and Progress",
    "category": "Management Controls",
    "parent": "Recruitment Policies Desk",
    "hierarchy": [
      "Recruitment Policies Desk",
      "Career Development and Progress"
    ],
    "description": "Policies for career advancement.",
    "keywords": [
      "recruitment policies desk",
      "careers-policies",
      "section",
      "card",
      "career",
      "development",
      "and",
      "progress",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers-policies"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "career-development-and-progress"
  },
  {
    "title": "Employee Growth and Future Opportunity",
    "category": "Management Controls",
    "parent": "Recruitment Policies Desk",
    "hierarchy": [
      "Recruitment Policies Desk",
      "Employee Growth and Future Opportunity"
    ],
    "description": "Guidelines for employee growth.",
    "keywords": [
      "recruitment policies desk",
      "careers-policies",
      "section",
      "card",
      "employee",
      "growth",
      "and",
      "future",
      "opportunity",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers-policies"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "employee-growth-and-future-opportunity"
  },
  {
    "title": "CRCCF Employment Eligibility Criteria",
    "category": "Management Controls",
    "parent": "Recruitment Policies Desk",
    "hierarchy": [
      "Recruitment Policies Desk",
      "CRCCF Employment Eligibility Criteria"
    ],
    "description": "Criteria for employment eligibility.",
    "keywords": [
      "recruitment policies desk",
      "careers-policies",
      "section",
      "card",
      "crccf",
      "employment",
      "eligibility",
      "criteria",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers-policies"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "violet",
    "id": "crccf-employment-eligibility-criteria"
  },
  {
    "title": "CRCCF Recruitment & Selection Process",
    "category": "Management Controls",
    "parent": "Recruitment Policies Desk",
    "hierarchy": [
      "Recruitment Policies Desk",
      "CRCCF Recruitment & Selection Process"
    ],
    "description": "Standard operating procedures for recruitment.",
    "keywords": [
      "recruitment policies desk",
      "careers-policies",
      "section",
      "card",
      "crccf",
      "recruitment",
      "selection",
      "process",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers-policies"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "rose",
    "id": "crccf-recruitment-selection-process"
  },
  {
    "title": "CRCCF Recruitment Instructions",
    "category": "Management Controls",
    "parent": "Recruitment Policies Desk",
    "hierarchy": [
      "Recruitment Policies Desk",
      "CRCCF Recruitment Instructions"
    ],
    "description": "Instructions for recruiters and candidates.",
    "keywords": [
      "recruitment policies desk",
      "careers-policies",
      "section",
      "card",
      "crccf",
      "recruitment",
      "instructions",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers-policies"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "amber",
    "id": "crccf-recruitment-instructions"
  },
  {
    "title": "CRCCF Recruitment Guidelines",
    "category": "Management Controls",
    "parent": "Recruitment Policies Desk",
    "hierarchy": [
      "Recruitment Policies Desk",
      "CRCCF Recruitment Guidelines"
    ],
    "description": "General guidelines for the hiring process.",
    "keywords": [
      "recruitment policies desk",
      "careers-policies",
      "section",
      "card",
      "crccf",
      "recruitment",
      "guidelines",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers-policies"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "crccf-recruitment-guidelines"
  },
  {
    "title": "CRCCF Recruitment Calendar",
    "category": "Management Controls",
    "parent": "Recruitment Policies Desk",
    "hierarchy": [
      "Recruitment Policies Desk",
      "CRCCF Recruitment Calendar"
    ],
    "description": "Schedule and calendar for hiring drives.",
    "keywords": [
      "recruitment policies desk",
      "careers-policies",
      "section",
      "card",
      "crccf",
      "recruitment",
      "calendar",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers-policies"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "blue",
    "id": "crccf-recruitment-calendar"
  },
  {
    "title": "Code of Conduct & Professional Ethics",
    "category": "Management Controls",
    "parent": "Recruitment Policies Desk",
    "hierarchy": [
      "Recruitment Policies Desk",
      "Code of Conduct & Professional Ethics"
    ],
    "description": "Ethics and conduct policies for employees.",
    "keywords": [
      "recruitment policies desk",
      "careers-policies",
      "section",
      "card",
      "code",
      "conduct",
      "professional",
      "ethics",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers-policies"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "code-of-conduct-professional-ethics"
  },
  {
    "title": "Training, Orientation & Skill Development",
    "category": "Management Controls",
    "parent": "Recruitment Policies Desk",
    "hierarchy": [
      "Recruitment Policies Desk",
      "Training, Orientation & Skill Development"
    ],
    "description": "Onboarding and training procedures.",
    "keywords": [
      "recruitment policies desk",
      "careers-policies",
      "section",
      "card",
      "training",
      "orientation",
      "skill",
      "development",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers-policies"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "training-orientation-skill-development"
  },
  {
    "title": "Performance Review & Evaluation System",
    "category": "Management Controls",
    "parent": "Recruitment Policies Desk",
    "hierarchy": [
      "Recruitment Policies Desk",
      "Performance Review & Evaluation System"
    ],
    "description": "System for evaluating employee performance.",
    "keywords": [
      "recruitment policies desk",
      "careers-policies",
      "section",
      "card",
      "performance",
      "review",
      "evaluation",
      "system",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers-policies"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "violet",
    "id": "performance-review-evaluation-system"
  },
  {
    "title": "Employee Rights & Responsibilities",
    "category": "Management Controls",
    "parent": "Recruitment Policies Desk",
    "hierarchy": [
      "Recruitment Policies Desk",
      "Employee Rights & Responsibilities"
    ],
    "description": "Rights and duties of all employees.",
    "keywords": [
      "recruitment policies desk",
      "careers-policies",
      "section",
      "card",
      "employee",
      "rights",
      "responsibilities",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers-policies"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "rose",
    "id": "employee-rights-responsibilities"
  },
  {
    "title": "Volunteer & Internship Policy",
    "category": "Management Controls",
    "parent": "Recruitment Policies Desk",
    "hierarchy": [
      "Recruitment Policies Desk",
      "Volunteer & Internship Policy"
    ],
    "description": "Policies governing volunteers and interns.",
    "keywords": [
      "recruitment policies desk",
      "careers-policies",
      "section",
      "card",
      "volunteer",
      "internship",
      "policy",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers-policies"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "amber",
    "id": "volunteer-internship-policy"
  },
  {
    "title": "Employee Recognition & Awards",
    "category": "Management Controls",
    "parent": "Recruitment Policies Desk",
    "hierarchy": [
      "Recruitment Policies Desk",
      "Employee Recognition & Awards"
    ],
    "description": "Awards and recognition policies.",
    "keywords": [
      "recruitment policies desk",
      "careers-policies",
      "section",
      "card",
      "employee",
      "recognition",
      "awards",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers-policies"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "employee-recognition-awards"
  },
  {
    "title": "Dummy Policy 1",
    "category": "Management Controls",
    "parent": "Recruitment Policies Desk",
    "hierarchy": [
      "Recruitment Policies Desk",
      "Dummy Policy 1"
    ],
    "description": "Placeholder for future policy 1.",
    "keywords": [
      "recruitment policies desk",
      "careers-policies",
      "section",
      "card",
      "dummy",
      "policy",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers-policies"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "blue",
    "id": "dummy-policy-1"
  },
  {
    "title": "Dummy Policy 2",
    "category": "Management Controls",
    "parent": "Recruitment Policies Desk",
    "hierarchy": [
      "Recruitment Policies Desk",
      "Dummy Policy 2"
    ],
    "description": "Placeholder for future policy 2.",
    "keywords": [
      "recruitment policies desk",
      "careers-policies",
      "section",
      "card",
      "dummy",
      "policy",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "careers-policies"
    },
    "iconName": "Shield",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "dummy-policy-2"
  },
  {
    "title": "Help Desk",
    "category": "Management Controls",
    "parent": "Contact Management Control",
    "hierarchy": [
      "Contact Management Control",
      "Help Desk"
    ],
    "description": "Manage support tickets and help desk inquiries.",
    "keywords": [
      "contact management control",
      "contact",
      "section",
      "card",
      "help",
      "desk",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "contact"
    },
    "iconName": "Phone",
    "badge": "Section Card",
    "theme": "blue",
    "id": "help-desk"
  },
  {
    "title": "Follow Apps",
    "category": "Management Controls",
    "parent": "Contact Management Control",
    "hierarchy": [
      "Contact Management Control",
      "Follow Apps"
    ],
    "description": "Manage social media and application links.",
    "keywords": [
      "contact management control",
      "contact",
      "section",
      "card",
      "follow",
      "apps",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "contact"
    },
    "iconName": "Phone",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "follow-apps"
  },
  {
    "title": "Branch Details",
    "category": "Management Controls",
    "parent": "Contact Management Control",
    "hierarchy": [
      "Contact Management Control",
      "Branch Details"
    ],
    "description": "Manage regional branch information and contacts.",
    "keywords": [
      "contact management control",
      "contact",
      "section",
      "card",
      "branch",
      "details",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "contact"
    },
    "iconName": "Phone",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "branch-details"
  },
  {
    "title": "Officer",
    "category": "Management Controls",
    "parent": "Contact Management Control",
    "hierarchy": [
      "Contact Management Control",
      "Officer"
    ],
    "description": "Manage contact details for official officers.",
    "keywords": [
      "contact management control",
      "contact",
      "section",
      "card",
      "officer",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "contact"
    },
    "iconName": "Phone",
    "badge": "Section Card",
    "theme": "violet",
    "id": "officer"
  },
  {
    "title": "Employee",
    "category": "Management Controls",
    "parent": "Contact Management Control",
    "hierarchy": [
      "Contact Management Control",
      "Employee"
    ],
    "description": "Manage internal employee contact directory.",
    "keywords": [
      "contact management control",
      "contact",
      "section",
      "card",
      "employee",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "contact"
    },
    "iconName": "Phone",
    "badge": "Section Card",
    "theme": "rose",
    "id": "employee"
  },
  {
    "title": "Teacher",
    "category": "Management Controls",
    "parent": "Contact Management Control",
    "hierarchy": [
      "Contact Management Control",
      "Teacher"
    ],
    "description": "Manage contact information for educational staff.",
    "keywords": [
      "contact management control",
      "contact",
      "section",
      "card",
      "teacher",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "contact"
    },
    "iconName": "Phone",
    "badge": "Section Card",
    "theme": "amber",
    "id": "teacher"
  },
  {
    "title": "Reporter",
    "category": "Management Controls",
    "parent": "Contact Management Control",
    "hierarchy": [
      "Contact Management Control",
      "Reporter"
    ],
    "description": "Manage media and reporter contacts.",
    "keywords": [
      "contact management control",
      "contact",
      "section",
      "card",
      "reporter",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "contact"
    },
    "iconName": "Phone",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "reporter"
  },
  {
    "title": "Advocate",
    "category": "Management Controls",
    "parent": "Contact Management Control",
    "hierarchy": [
      "Contact Management Control",
      "Advocate"
    ],
    "description": "Manage legal advocate contact details.",
    "keywords": [
      "contact management control",
      "contact",
      "section",
      "card",
      "advocate",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "contact"
    },
    "iconName": "Phone",
    "badge": "Section Card",
    "theme": "blue",
    "id": "advocate"
  },
  {
    "title": "Legal Advisor",
    "category": "Management Controls",
    "parent": "Contact Management Control",
    "hierarchy": [
      "Contact Management Control",
      "Legal Advisor"
    ],
    "description": "Manage contacts for legal advisors.",
    "keywords": [
      "contact management control",
      "contact",
      "section",
      "card",
      "legal",
      "advisor",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "contact"
    },
    "iconName": "Phone",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "legal-advisor"
  },
  {
    "title": "Board Director",
    "category": "Management Controls",
    "parent": "Contact Management Control",
    "hierarchy": [
      "Contact Management Control",
      "Board Director"
    ],
    "description": "Manage board of directors contact information.",
    "keywords": [
      "contact management control",
      "contact",
      "section",
      "card",
      "board",
      "director",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "contact"
    },
    "iconName": "Phone",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "board-director"
  },
  {
    "title": "Board Member",
    "category": "Management Controls",
    "parent": "Contact Management Control",
    "hierarchy": [
      "Contact Management Control",
      "Board Member"
    ],
    "description": "Manage board members contact details.",
    "keywords": [
      "contact management control",
      "contact",
      "section",
      "card",
      "board",
      "member",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "contact"
    },
    "iconName": "Phone",
    "badge": "Section Card",
    "theme": "violet",
    "id": "board-member"
  },
  {
    "title": "AI Chat",
    "category": "Management Controls",
    "parent": "Contact Management Control",
    "hierarchy": [
      "Contact Management Control",
      "AI Chat"
    ],
    "description": "Manage automated AI chat support configuration.",
    "keywords": [
      "contact management control",
      "contact",
      "section",
      "card",
      "chat",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "contact"
    },
    "iconName": "Phone",
    "badge": "Section Card",
    "theme": "rose",
    "id": "ai-chat"
  },
  {
    "title": "Review",
    "category": "Management Controls",
    "parent": "Contact Management Control",
    "hierarchy": [
      "Contact Management Control",
      "Review"
    ],
    "description": "Manage user reviews and testimonials.",
    "keywords": [
      "contact management control",
      "contact",
      "section",
      "card",
      "review",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "contact"
    },
    "iconName": "Phone",
    "badge": "Section Card",
    "theme": "amber",
    "id": "review"
  },
  {
    "title": "Feedback",
    "category": "Management Controls",
    "parent": "Contact Management Control",
    "hierarchy": [
      "Contact Management Control",
      "Feedback"
    ],
    "description": "Manage user feedback and suggestions.",
    "keywords": [
      "contact management control",
      "contact",
      "section",
      "card",
      "feedback",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "contact"
    },
    "iconName": "Phone",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "feedback"
  },
  {
    "title": "Add Link",
    "category": "Management Controls",
    "parent": "Social & Mobile Apps Desk",
    "hierarchy": [
      "Social & Mobile Apps Desk",
      "Add Link"
    ],
    "description": "Add new social or application links.",
    "keywords": [
      "social & mobile apps desk",
      "contact-follow-apps",
      "section",
      "card",
      "add",
      "link",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "contact-follow-apps"
    },
    "iconName": "Globe",
    "badge": "Section Card",
    "theme": "blue",
    "id": "add-link"
  },
  {
    "title": "View Link",
    "category": "Management Controls",
    "parent": "Social & Mobile Apps Desk",
    "hierarchy": [
      "Social & Mobile Apps Desk",
      "View Link"
    ],
    "description": "View all active application links.",
    "keywords": [
      "social & mobile apps desk",
      "contact-follow-apps",
      "section",
      "card",
      "view",
      "link",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "contact-follow-apps"
    },
    "iconName": "Globe",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "view-link"
  },
  {
    "title": "Manage Link",
    "category": "Management Controls",
    "parent": "Social & Mobile Apps Desk",
    "hierarchy": [
      "Social & Mobile Apps Desk",
      "Manage Link"
    ],
    "description": "Edit or manage existing links.",
    "keywords": [
      "social & mobile apps desk",
      "contact-follow-apps",
      "section",
      "card",
      "manage",
      "link",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "contact-follow-apps"
    },
    "iconName": "Globe",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "manage-link"
  },
  {
    "title": "Upload Link",
    "category": "Management Controls",
    "parent": "Social & Mobile Apps Desk",
    "hierarchy": [
      "Social & Mobile Apps Desk",
      "Upload Link"
    ],
    "description": "Bulk upload links via document.",
    "keywords": [
      "social & mobile apps desk",
      "contact-follow-apps",
      "section",
      "card",
      "upload",
      "link",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "contact-follow-apps"
    },
    "iconName": "Globe",
    "badge": "Section Card",
    "theme": "violet",
    "id": "upload-link"
  },
  {
    "title": "Report a Cyber Crime - Important Information",
    "category": "Cyber Crime & Support",
    "parent": "Report Cyber Crime Management Control",
    "hierarchy": [
      "Report Cyber Crime Management Control",
      "Report a Cyber Crime - Important Information"
    ],
    "description": "Crucial information before reporting a cyber crime.",
    "keywords": [
      "report cyber crime management control",
      "report-crime",
      "section",
      "card",
      "report",
      "cyber",
      "crime",
      "important",
      "information",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "report-crime"
    },
    "iconName": "ShieldAlert",
    "badge": "Section Card",
    "theme": "blue",
    "id": "report-a-cyber-crime-important-information"
  },
  {
    "title": "How to Report a Cyber Crime",
    "category": "Cyber Crime & Support",
    "parent": "Report Cyber Crime Management Control",
    "hierarchy": [
      "Report Cyber Crime Management Control",
      "How to Report a Cyber Crime"
    ],
    "description": "Step-by-step guide on the reporting process.",
    "keywords": [
      "report cyber crime management control",
      "report-crime",
      "section",
      "card",
      "how",
      "report",
      "cyber",
      "crime",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "report-crime"
    },
    "iconName": "ShieldAlert",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "how-to-report-a-cyber-crime"
  },
  {
    "title": "Cyber Fraud Complaint Registration",
    "category": "Cyber Crime & Support",
    "parent": "Report Cyber Crime Management Control",
    "hierarchy": [
      "Report Cyber Crime Management Control",
      "Cyber Fraud Complaint Registration"
    ],
    "description": "Portal for registering cyber fraud complaints.",
    "keywords": [
      "report cyber crime management control",
      "report-crime",
      "section",
      "card",
      "cyber",
      "fraud",
      "complaint",
      "registration",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "report-crime"
    },
    "iconName": "ShieldAlert",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "cyber-fraud-complaint-registration"
  },
  {
    "title": "Track Your Case Status",
    "category": "Cyber Crime & Support",
    "parent": "Report Cyber Crime Management Control",
    "hierarchy": [
      "Report Cyber Crime Management Control",
      "Track Your Case Status"
    ],
    "description": "Monitor the progress of reported cases.",
    "keywords": [
      "report cyber crime management control",
      "report-crime",
      "section",
      "card",
      "track",
      "your",
      "case",
      "status",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "report-crime"
    },
    "iconName": "ShieldAlert",
    "badge": "Section Card",
    "theme": "violet",
    "id": "track-your-case-status"
  },
  {
    "title": "Types of Cyber Crime",
    "category": "Cyber Crime & Support",
    "parent": "Report Cyber Crime Management Control",
    "hierarchy": [
      "Report Cyber Crime Management Control",
      "Types of Cyber Crime"
    ],
    "description": "Database and definitions of cyber crime types.",
    "keywords": [
      "report cyber crime management control",
      "report-crime",
      "section",
      "card",
      "types",
      "cyber",
      "crime",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "report-crime"
    },
    "iconName": "ShieldAlert",
    "badge": "Section Card",
    "theme": "rose",
    "id": "types-of-cyber-crime"
  },
  {
    "title": "Cyber Security Tips",
    "category": "Cyber Crime & Support",
    "parent": "Report Cyber Crime Management Control",
    "hierarchy": [
      "Report Cyber Crime Management Control",
      "Cyber Security Tips"
    ],
    "description": "General tips for maintaining digital security.",
    "keywords": [
      "report cyber crime management control",
      "report-crime",
      "section",
      "card",
      "cyber",
      "security",
      "tips",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "report-crime"
    },
    "iconName": "ShieldAlert",
    "badge": "Section Card",
    "theme": "amber",
    "id": "cyber-security-tips"
  },
  {
    "title": "Report a Cyber Crime - Awareness & Prevention Tips",
    "category": "Cyber Crime & Support",
    "parent": "Report Cyber Crime Management Control",
    "hierarchy": [
      "Report Cyber Crime Management Control",
      "Report a Cyber Crime - Awareness & Prevention Tips"
    ],
    "description": "Guidelines for preventing cyber attacks.",
    "keywords": [
      "report cyber crime management control",
      "report-crime",
      "section",
      "card",
      "report",
      "cyber",
      "crime",
      "awareness",
      "prevention",
      "tips",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "report-crime"
    },
    "iconName": "ShieldAlert",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "report-a-cyber-crime-awareness-prevention-tips"
  },
  {
    "title": "Legal Guidance & Awareness",
    "category": "Cyber Crime & Support",
    "parent": "Report Cyber Crime Management Control",
    "hierarchy": [
      "Report Cyber Crime Management Control",
      "Legal Guidance & Awareness"
    ],
    "description": "Legal resources and awareness materials.",
    "keywords": [
      "report cyber crime management control",
      "report-crime",
      "section",
      "card",
      "legal",
      "guidance",
      "awareness",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "report-crime"
    },
    "iconName": "ShieldAlert",
    "badge": "Section Card",
    "theme": "blue",
    "id": "legal-guidance-awareness"
  },
  {
    "title": "Cyber Laws & Rights",
    "category": "Cyber Crime & Support",
    "parent": "Report Cyber Crime Management Control",
    "hierarchy": [
      "Report Cyber Crime Management Control",
      "Cyber Laws & Rights"
    ],
    "description": "Information on digital rights and cyber laws.",
    "keywords": [
      "report cyber crime management control",
      "report-crime",
      "section",
      "card",
      "cyber",
      "laws",
      "rights",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "report-crime"
    },
    "iconName": "ShieldAlert",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "cyber-laws-rights"
  },
  {
    "title": "Cyber Safety & Support for Girls and Women",
    "category": "Cyber Crime & Support",
    "parent": "Report Cyber Crime Management Control",
    "hierarchy": [
      "Report Cyber Crime Management Control",
      "Cyber Safety & Support for Girls and Women"
    ],
    "description": "Specialized support and safety guidelines.",
    "keywords": [
      "report cyber crime management control",
      "report-crime",
      "section",
      "card",
      "cyber",
      "safety",
      "support",
      "for",
      "girls",
      "and",
      "women",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "report-crime"
    },
    "iconName": "ShieldAlert",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "cyber-safety-support-for-girls-and-women"
  },
  {
    "title": "Report a Cyber Crime - Victim Rights & Support",
    "category": "Cyber Crime & Support",
    "parent": "Report Cyber Crime Management Control",
    "hierarchy": [
      "Report Cyber Crime Management Control",
      "Report a Cyber Crime - Victim Rights & Support"
    ],
    "description": "Rights and entitlements for cyber crime victims.",
    "keywords": [
      "report cyber crime management control",
      "report-crime",
      "section",
      "card",
      "report",
      "cyber",
      "crime",
      "victim",
      "rights",
      "support",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "report-crime"
    },
    "iconName": "ShieldAlert",
    "badge": "Section Card",
    "theme": "violet",
    "id": "report-a-cyber-crime-victim-rights-support"
  },
  {
    "title": "Report a Cyber Crime - Victim Support and Assistance",
    "category": "Cyber Crime & Support",
    "parent": "Report Cyber Crime Management Control",
    "hierarchy": [
      "Report Cyber Crime Management Control",
      "Report a Cyber Crime - Victim Support and Assistance"
    ],
    "description": "Active assistance programs for victims.",
    "keywords": [
      "report cyber crime management control",
      "report-crime",
      "section",
      "card",
      "report",
      "cyber",
      "crime",
      "victim",
      "support",
      "and",
      "assistance",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "report-crime"
    },
    "iconName": "ShieldAlert",
    "badge": "Section Card",
    "theme": "rose",
    "id": "report-a-cyber-crime-victim-support-and-assistance"
  },
  {
    "title": "Cyber Crime Prevention",
    "category": "Cyber Crime & Support",
    "parent": "Report Cyber Crime Management Control",
    "hierarchy": [
      "Report Cyber Crime Management Control",
      "Cyber Crime Prevention"
    ],
    "description": "Proactive measures against cyber crimes.",
    "keywords": [
      "report cyber crime management control",
      "report-crime",
      "section",
      "card",
      "cyber",
      "crime",
      "prevention",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "report-crime"
    },
    "iconName": "ShieldAlert",
    "badge": "Section Card",
    "theme": "amber",
    "id": "cyber-crime-prevention"
  },
  {
    "title": "Case Status",
    "category": "Cyber Crime & Support",
    "parent": "Report Cyber Crime Management Control",
    "hierarchy": [
      "Report Cyber Crime Management Control",
      "Case Status"
    ],
    "description": "Manage and update internal case statuses.",
    "keywords": [
      "report cyber crime management control",
      "report-crime",
      "section",
      "card",
      "case",
      "status",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "report-crime"
    },
    "iconName": "ShieldAlert",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "case-status"
  },
  {
    "title": "Success Case Stories",
    "category": "Cyber Crime & Support",
    "parent": "Report Cyber Crime Management Control",
    "hierarchy": [
      "Report Cyber Crime Management Control",
      "Success Case Stories"
    ],
    "description": "Resolved cases and success stories.",
    "keywords": [
      "report cyber crime management control",
      "report-crime",
      "section",
      "card",
      "success",
      "case",
      "stories",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "report-crime"
    },
    "iconName": "ShieldAlert",
    "badge": "Section Card",
    "theme": "blue",
    "id": "success-case-stories"
  },
  {
    "title": "Ongoing Investigation Cases",
    "category": "Cyber Crime & Support",
    "parent": "Report Cyber Crime Management Control",
    "hierarchy": [
      "Report Cyber Crime Management Control",
      "Ongoing Investigation Cases"
    ],
    "description": "Manage active and ongoing cyber investigations.",
    "keywords": [
      "report cyber crime management control",
      "report-crime",
      "section",
      "card",
      "ongoing",
      "investigation",
      "cases",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "report-crime"
    },
    "iconName": "ShieldAlert",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "ongoing-investigation-cases"
  },
  {
    "title": "Cyber Threat Intelligence",
    "category": "Cyber Crime & Support",
    "parent": "Report Cyber Crime Management Control",
    "hierarchy": [
      "Report Cyber Crime Management Control",
      "Cyber Threat Intelligence"
    ],
    "description": "Actionable intelligence on emerging threats.",
    "keywords": [
      "report cyber crime management control",
      "report-crime",
      "section",
      "card",
      "cyber",
      "threat",
      "intelligence",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "report-crime"
    },
    "iconName": "ShieldAlert",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "cyber-threat-intelligence"
  },
  {
    "title": "Cyber Crime FAQs",
    "category": "Cyber Crime & Support",
    "parent": "Report Cyber Crime Management Control",
    "hierarchy": [
      "Report Cyber Crime Management Control",
      "Cyber Crime FAQs"
    ],
    "description": "Frequently asked questions regarding cyber crimes.",
    "keywords": [
      "report cyber crime management control",
      "report-crime",
      "section",
      "card",
      "cyber",
      "crime",
      "faqs",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "report-crime"
    },
    "iconName": "ShieldAlert",
    "badge": "Section Card",
    "theme": "violet",
    "id": "cyber-crime-faqs"
  },
  {
    "title": "Right of Cybercrime Victims",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Right of Cybercrime Victims"
    ],
    "description": "Information regarding the legal rights of cybercrime victims.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "right",
      "cybercrime",
      "victims",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "blue",
    "id": "right-of-cybercrime-victims"
  },
  {
    "title": "Victim Assistance & Protection",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Victim Assistance & Protection"
    ],
    "description": "Assistance programs and protection measures for victims.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "victim",
      "assistance",
      "protection",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "victim-assistance-protection"
  },
  {
    "title": "Cybercrime Victim Rights & Relief",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Cybercrime Victim Rights & Relief"
    ],
    "description": "Details on relief options and rights for victims.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "cybercrime",
      "victim",
      "rights",
      "relief",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "cybercrime-victim-rights-relief"
  },
  {
    "title": "Digital Crime Victim Help Desk",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Digital Crime Victim Help Desk"
    ],
    "description": "Direct help desk for victims of digital crimes.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "digital",
      "crime",
      "victim",
      "help",
      "desk",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "violet",
    "id": "digital-crime-victim-help-desk"
  },
  {
    "title": "Support Services for Victims",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Support Services for Victims"
    ],
    "description": "Comprehensive support services for affected individuals.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "support",
      "services",
      "for",
      "victims",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "rose",
    "id": "support-services-for-victims"
  },
  {
    "title": "Help & Justice for Victims",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Help & Justice for Victims"
    ],
    "description": "Resources for seeking justice and help.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "help",
      "justice",
      "for",
      "victims",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "amber",
    "id": "help-justice-for-victims"
  },
  {
    "title": "Empowering Cybercrime Victims",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Empowering Cybercrime Victims"
    ],
    "description": "Programs aimed at empowering cybercrime victims.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "empowering",
      "cybercrime",
      "victims",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "empowering-cybercrime-victims"
  },
  {
    "title": "Digital Victim Support & Protection",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Digital Victim Support & Protection"
    ],
    "description": "Support and protection in the digital space.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "digital",
      "victim",
      "support",
      "protection",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "blue",
    "id": "digital-victim-support-protection"
  },
  {
    "title": "Victim Protection & Legal Aid",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Victim Protection & Legal Aid"
    ],
    "description": "Legal aid and protection services for victims.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "victim",
      "protection",
      "legal",
      "aid",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "victim-protection-legal-aid"
  },
  {
    "title": "Online Harassment Help & Rights",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Online Harassment Help & Rights"
    ],
    "description": "Help and rights for victims of online harassment.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "online",
      "harassment",
      "help",
      "rights",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "online-harassment-help-rights"
  },
  {
    "title": "Cyber Justice for Victims",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Cyber Justice for Victims"
    ],
    "description": "Navigating the cyber justice system.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "cyber",
      "justice",
      "for",
      "victims",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "violet",
    "id": "cyber-justice-for-victims"
  },
  {
    "title": "Cybercrime Victim Advocacy",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Cybercrime Victim Advocacy"
    ],
    "description": "Advocacy groups and support for victims.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "cybercrime",
      "victim",
      "advocacy",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "rose",
    "id": "cybercrime-victim-advocacy"
  },
  {
    "title": "Online Safety & Victim Help",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Online Safety & Victim Help"
    ],
    "description": "Safety guidelines and help for victims online.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "online",
      "safety",
      "victim",
      "help",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "amber",
    "id": "online-safety-victim-help"
  },
  {
    "title": "Justice & Healing for Victims",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Justice & Healing for Victims"
    ],
    "description": "Resources for justice and emotional healing.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "justice",
      "healing",
      "for",
      "victims",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "justice-healing-for-victims"
  },
  {
    "title": "Restoring Dignity to Cyber Victims",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Restoring Dignity to Cyber Victims"
    ],
    "description": "Programs focused on restoring dignity to victims.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "restoring",
      "dignity",
      "cyber",
      "victims",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "blue",
    "id": "restoring-dignity-to-cyber-victims"
  },
  {
    "title": "Digital Justice Support Services",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Digital Justice Support Services"
    ],
    "description": "Support services for obtaining digital justice.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "digital",
      "justice",
      "support",
      "services",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "digital-justice-support-services"
  },
  {
    "title": "Victim Outreach & Legal Support",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Victim Outreach & Legal Support"
    ],
    "description": "Outreach programs and legal support.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "victim",
      "outreach",
      "legal",
      "support",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "victim-outreach-legal-support"
  },
  {
    "title": "Psychological Counselling for Cyber Victims",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Psychological Counselling for Cyber Victims"
    ],
    "description": "Counselling and mental health support.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "psychological",
      "counselling",
      "for",
      "cyber",
      "victims",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "violet",
    "id": "psychological-counselling-for-cyber-victims"
  },
  {
    "title": "24/7 Victim Helpline & Chat Support",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "24/7 Victim Helpline & Chat Support"
    ],
    "description": "Round-the-clock helpline and chat support.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "victim",
      "helpline",
      "chat",
      "support",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "rose",
    "id": "24-7-victim-helpline-chat-support"
  },
  {
    "title": "Women & Child Cyber Safety Support",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Women & Child Cyber Safety Support"
    ],
    "description": "Specialized support for women and children.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "women",
      "child",
      "cyber",
      "safety",
      "support",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "amber",
    "id": "women-child-cyber-safety-support"
  },
  {
    "title": "Legal Guidance for Digital Crime Victims",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Legal Guidance for Digital Crime Victims"
    ],
    "description": "Expert legal guidance for digital crimes.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "legal",
      "guidance",
      "for",
      "digital",
      "crime",
      "victims",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "legal-guidance-for-digital-crime-victims"
  },
  {
    "title": "Data Privacy & Protection Support",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Data Privacy & Protection Support"
    ],
    "description": "Support for data privacy and protection issues.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "data",
      "privacy",
      "protection",
      "support",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "blue",
    "id": "data-privacy-protection-support"
  },
  {
    "title": "Social Media Misuse Victim Aid",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Social Media Misuse Victim Aid"
    ],
    "description": "Aid for victims of social media misuse.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "social",
      "media",
      "misuse",
      "victim",
      "aid",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "social-media-misuse-victim-aid"
  },
  {
    "title": "Phishing & Online Scam Victim Support",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Phishing & Online Scam Victim Support"
    ],
    "description": "Support for victims of phishing and online scams.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "phishing",
      "online",
      "scam",
      "victim",
      "support",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "phishing-online-scam-victim-support"
  },
  {
    "title": "Cyber Extortion & Blackmail Response Team",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Cyber Extortion & Blackmail Response Team"
    ],
    "description": "Response team for cyber extortion and blackmail.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "cyber",
      "extortion",
      "blackmail",
      "response",
      "team",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "violet",
    "id": "cyber-extortion-blackmail-response-team"
  },
  {
    "title": "Digital Forensics Assistance for Victims",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Digital Forensics Assistance for Victims"
    ],
    "description": "Digital forensics assistance and support.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "digital",
      "forensics",
      "assistance",
      "for",
      "victims",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "rose",
    "id": "digital-forensics-assistance-for-victims"
  },
  {
    "title": "Educational Resources for Victim Rights",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Educational Resources for Victim Rights"
    ],
    "description": "Educational materials on victim rights.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "educational",
      "resources",
      "for",
      "victim",
      "rights",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "amber",
    "id": "educational-resources-for-victim-rights"
  },
  {
    "title": "Cyber Victim Relief & Emergency Response",
    "category": "Cyber Crime & Support",
    "parent": "Victim Rights & Support Control",
    "hierarchy": [
      "Victim Rights & Support Control",
      "Cyber Victim Relief & Emergency Response"
    ],
    "description": "Emergency response and relief for cyber victims.",
    "keywords": [
      "victim rights & support control",
      "victim-rights-support",
      "section",
      "card",
      "cyber",
      "victim",
      "relief",
      "emergency",
      "response",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "victim-rights-support"
    },
    "iconName": "Heart",
    "badge": "Section Card",
    "theme": "cyan",
    "id": "cyber-victim-relief-emergency-response"
  },
  {
    "title": "Logo Control",
    "category": "Management Controls",
    "parent": "Header Management Control",
    "hierarchy": [
      "Header Management Control",
      "Logo Control"
    ],
    "description": "Update and manage the main application logo.",
    "keywords": [
      "header management control",
      "header",
      "section",
      "card",
      "logo",
      "control",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "header"
    },
    "iconName": "Globe",
    "badge": "Section Card",
    "theme": "blue",
    "id": "logo-control"
  },
  {
    "title": "Content Control",
    "category": "Management Controls",
    "parent": "Header Management Control",
    "hierarchy": [
      "Header Management Control",
      "Content Control"
    ],
    "description": "Manage dynamic text and content in the header.",
    "keywords": [
      "header management control",
      "header",
      "section",
      "card",
      "content",
      "control",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "header"
    },
    "iconName": "Globe",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "content-control"
  },
  {
    "title": "Upcoming Event Control",
    "category": "Management Controls",
    "parent": "Header Management Control",
    "hierarchy": [
      "Header Management Control",
      "Upcoming Event Control"
    ],
    "description": "Configure upcoming event banners or links.",
    "keywords": [
      "header management control",
      "header",
      "section",
      "card",
      "upcoming",
      "event",
      "control",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "header"
    },
    "iconName": "Globe",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "upcoming-event-control"
  },
  {
    "title": "Notification Control",
    "category": "Management Controls",
    "parent": "Header Management Control",
    "hierarchy": [
      "Header Management Control",
      "Notification Control"
    ],
    "description": "Manage global header notifications and alerts.",
    "keywords": [
      "header management control",
      "header",
      "section",
      "card",
      "notification",
      "control",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "header"
    },
    "iconName": "Globe",
    "badge": "Section Card",
    "theme": "violet",
    "id": "notification-control"
  },
  {
    "title": "Footer Useful Links Control",
    "category": "Management Controls",
    "parent": "Footer Management Control",
    "hierarchy": [
      "Footer Management Control",
      "Footer Useful Links Control"
    ],
    "description": "Manage navigational links in the footer.",
    "keywords": [
      "footer management control",
      "footer",
      "section",
      "card",
      "useful",
      "links",
      "control",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "footer"
    },
    "iconName": "Layers",
    "badge": "Section Card",
    "theme": "blue",
    "id": "footer-useful-links-control"
  },
  {
    "title": "Footer Address Control",
    "category": "Management Controls",
    "parent": "Footer Management Control",
    "hierarchy": [
      "Footer Management Control",
      "Footer Address Control"
    ],
    "description": "Update physical address and contact info.",
    "keywords": [
      "footer management control",
      "footer",
      "section",
      "card",
      "address",
      "control",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "footer"
    },
    "iconName": "Layers",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "footer-address-control"
  },
  {
    "title": "Footer Content Control",
    "category": "Management Controls",
    "parent": "Footer Management Control",
    "hierarchy": [
      "Footer Management Control",
      "Footer Content Control"
    ],
    "description": "Manage copyright text and general footer content.",
    "keywords": [
      "footer management control",
      "footer",
      "section",
      "card",
      "content",
      "control",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "footer"
    },
    "iconName": "Layers",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "footer-content-control"
  },
  {
    "title": "Footer Developer Control",
    "category": "Management Controls",
    "parent": "Footer Management Control",
    "hierarchy": [
      "Footer Management Control",
      "Footer Developer Control"
    ],
    "description": "Manage developer credits and technical links.",
    "keywords": [
      "footer management control",
      "footer",
      "section",
      "card",
      "developer",
      "control",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "footer"
    },
    "iconName": "Layers",
    "badge": "Section Card",
    "theme": "violet",
    "id": "footer-developer-control"
  },
  {
    "title": "Threat Intelligence Bulletin",
    "category": "Management Controls",
    "parent": "Insights Management Control",
    "hierarchy": [
      "Insights Management Control",
      "Threat Intelligence Bulletin"
    ],
    "description": "Curate daily threat bulletins, zero-day alerts, and malware signatures.",
    "keywords": [
      "insights management control",
      "insights",
      "section",
      "card",
      "threat",
      "intelligence",
      "bulletin",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "insights"
    },
    "iconName": "Activity",
    "badge": "Section Card",
    "theme": "blue",
    "id": "threat-intelligence-bulletin"
  },
  {
    "title": "Cyber Crime Research Reports",
    "category": "Management Controls",
    "parent": "Insights Management Control",
    "hierarchy": [
      "Insights Management Control",
      "Cyber Crime Research Reports"
    ],
    "description": "Publish quarterly digital forensic trends, scam vectors, and whitepapers.",
    "keywords": [
      "insights management control",
      "insights",
      "section",
      "card",
      "cyber",
      "crime",
      "research",
      "reports",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "insights"
    },
    "iconName": "Activity",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "cyber-crime-research-reports"
  },
  {
    "title": "Malware Analysis Feed",
    "category": "Management Controls",
    "parent": "Insights Management Control",
    "hierarchy": [
      "Insights Management Control",
      "Malware Analysis Feed"
    ],
    "description": "Deep behavioral breakdowns of emerging trojans, ransomware, and spyware.",
    "keywords": [
      "insights management control",
      "insights",
      "section",
      "card",
      "malware",
      "analysis",
      "feed",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "insights"
    },
    "iconName": "Activity",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "malware-analysis-feed"
  },
  {
    "title": "Case Studies & Investigation",
    "category": "Management Controls",
    "parent": "Insights Management Control",
    "hierarchy": [
      "Insights Management Control",
      "Case Studies & Investigation"
    ],
    "description": "Document resolved cybercrime investigations, case studies, and forensics.",
    "keywords": [
      "insights management control",
      "insights",
      "section",
      "card",
      "case",
      "studies",
      "investigation",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "insights"
    },
    "iconName": "Activity",
    "badge": "Section Card",
    "theme": "violet",
    "id": "case-studies-investigation"
  },
  {
    "title": "Vulnerability Disclosure Desk",
    "category": "Management Controls",
    "parent": "Insights Management Control",
    "hierarchy": [
      "Insights Management Control",
      "Vulnerability Disclosure Desk"
    ],
    "description": "Track CVE patches, public disclosure notices, and security advisories.",
    "keywords": [
      "insights management control",
      "insights",
      "section",
      "card",
      "vulnerability",
      "disclosure",
      "desk",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "insights"
    },
    "iconName": "Activity",
    "badge": "Section Card",
    "theme": "rose",
    "id": "vulnerability-disclosure-desk"
  },
  {
    "title": "Public Safety Bulletins",
    "category": "Management Controls",
    "parent": "Insights Management Control",
    "hierarchy": [
      "Insights Management Control",
      "Public Safety Bulletins"
    ],
    "description": "Citizen-centric guidelines, advisory alerts, and safety best practices.",
    "keywords": [
      "insights management control",
      "insights",
      "section",
      "card",
      "public",
      "safety",
      "bulletins",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "insights"
    },
    "iconName": "Activity",
    "badge": "Section Card",
    "theme": "amber",
    "id": "public-safety-bulletins"
  },
  {
    "title": "Track Reference Token",
    "category": "Verification Services",
    "parent": "Check Application Status Control",
    "hierarchy": [
      "Check Application Status Control",
      "Track Reference Token"
    ],
    "description": "Search and inspect citizen token references, FIR status, and timestamps.",
    "keywords": [
      "check application status control",
      "app-status",
      "section",
      "card",
      "track",
      "reference",
      "token",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "app-status"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "blue",
    "id": "track-reference-token"
  },
  {
    "title": "SMS & Dispatch Alerts",
    "category": "Verification Services",
    "parent": "Check Application Status Control",
    "hierarchy": [
      "Check Application Status Control",
      "SMS & Dispatch Alerts"
    ],
    "description": "Dispatch automated SMS and email notifications regarding status updates.",
    "keywords": [
      "check application status control",
      "app-status",
      "section",
      "card",
      "sms",
      "dispatch",
      "alerts",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "app-status"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "sms-dispatch-alerts"
  },
  {
    "title": "Inquiry Resolution Desk",
    "category": "Verification Services",
    "parent": "Check Application Status Control",
    "hierarchy": [
      "Check Application Status Control",
      "Inquiry Resolution Desk"
    ],
    "description": "Review and reply to pending citizen inquiries and clarification requests.",
    "keywords": [
      "check application status control",
      "app-status",
      "section",
      "card",
      "inquiry",
      "resolution",
      "desk",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "app-status"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "inquiry-resolution-desk"
  },
  {
    "title": "Application Audit Log",
    "category": "Verification Services",
    "parent": "Check Application Status Control",
    "hierarchy": [
      "Check Application Status Control",
      "Application Audit Log"
    ],
    "description": "Inspect timestamped audit logs for all application review actions.",
    "keywords": [
      "check application status control",
      "app-status",
      "section",
      "card",
      "application",
      "audit",
      "log",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "app-status"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "violet",
    "id": "application-audit-log"
  },
  {
    "title": "Pending Clearance Queue",
    "category": "Verification Services",
    "parent": "Check Application Status Control",
    "hierarchy": [
      "Check Application Status Control",
      "Pending Clearance Queue"
    ],
    "description": "Manage applications awaiting forensic verification and officer sign-off.",
    "keywords": [
      "check application status control",
      "app-status",
      "section",
      "card",
      "pending",
      "clearance",
      "queue",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "app-status"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "rose",
    "id": "pending-clearance-queue"
  },
  {
    "title": "Approved Credentials Log",
    "category": "Verification Services",
    "parent": "Check Application Status Control",
    "hierarchy": [
      "Check Application Status Control",
      "Approved Credentials Log"
    ],
    "description": "View and download authorized clearance certificates and identity records.",
    "keywords": [
      "check application status control",
      "app-status",
      "section",
      "card",
      "approved",
      "credentials",
      "log",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "app-status"
    },
    "iconName": "Search",
    "badge": "Section Card",
    "theme": "amber",
    "id": "approved-credentials-log"
  },
  {
    "title": "Sandbox Environment",
    "category": "Management Controls",
    "parent": "Demo Management Control",
    "hierarchy": [
      "Demo Management Control",
      "Sandbox Environment"
    ],
    "description": "Simulate citizen application submissions and verification test runs.",
    "keywords": [
      "demo management control",
      "demo",
      "section",
      "card",
      "sandbox",
      "environment",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "demo"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "blue",
    "id": "sandbox-environment"
  },
  {
    "title": "Cyber Crime Simulator",
    "category": "Management Controls",
    "parent": "Demo Management Control",
    "hierarchy": [
      "Demo Management Control",
      "Cyber Crime Simulator"
    ],
    "description": "Test reporting pipelines, evidence uploads, and dummy incident alerts.",
    "keywords": [
      "demo management control",
      "demo",
      "section",
      "card",
      "cyber",
      "crime",
      "simulator",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "demo"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "indigo",
    "id": "cyber-crime-simulator"
  },
  {
    "title": "Prototype Portal Modules",
    "category": "Management Controls",
    "parent": "Demo Management Control",
    "hierarchy": [
      "Demo Management Control",
      "Prototype Portal Modules"
    ],
    "description": "Preview upcoming UI modules, dashboard enhancements, and beta features.",
    "keywords": [
      "demo management control",
      "demo",
      "section",
      "card",
      "prototype",
      "portal",
      "modules",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "demo"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "emerald",
    "id": "prototype-portal-modules"
  },
  {
    "title": "Officer Workflow Sandbox",
    "category": "Management Controls",
    "parent": "Demo Management Control",
    "hierarchy": [
      "Demo Management Control",
      "Officer Workflow Sandbox"
    ],
    "description": "Test approval stages, status flags, and badge issuance workflows.",
    "keywords": [
      "demo management control",
      "demo",
      "section",
      "card",
      "officer",
      "workflow",
      "sandbox",
      "section card"
    ],
    "target": {
      "scope": "management",
      "view": "demo"
    },
    "iconName": "Play",
    "badge": "Section Card",
    "theme": "violet",
    "id": "officer-workflow-sandbox"
  }
];

/**
 * Searches the catalog with fuzzy multi-field matching, keyword ranking, and category filtering.
 */
export function searchProject(query = '', selectedCategory = 'All') {
  const clean = query.trim().toLowerCase();
  
  return SEARCH_DATABASE.filter(item => {
    // 1. Category Filter
    if (selectedCategory !== 'All' && item.category !== selectedCategory) {
      return false;
    }

    if (!clean) return true;

    // 2. Query Term Search
    const title = item.title.toLowerCase();
    const desc = item.description.toLowerCase();
    const parent = (item.parent || '').toLowerCase();
    const keywords = (item.keywords || []).map(k => k.toLowerCase());
    const hierarchy = (item.hierarchy || []).map(h => h.toLowerCase()).join(' ');

    const matchesTitle = title.includes(clean);
    const matchesDesc = desc.includes(clean);
    const matchesParent = parent.includes(clean);
    const matchesHierarchy = hierarchy.includes(clean);
    const matchesKeywords = keywords.some(k => k.includes(clean) || clean.includes(k));

    return matchesTitle || matchesKeywords || matchesDesc || matchesParent || matchesHierarchy;
  }).sort((a, b) => {
    if (!clean) return 0;
    const aTitle = a.title.toLowerCase();
    const bTitle = b.title.toLowerCase();

    // Exact title match gets #1 priority
    if (aTitle === clean) return -1;
    if (bTitle === clean) return 1;

    // Title starts with query
    if (aTitle.startsWith(clean) && !bTitle.startsWith(clean)) return -1;
    if (!aTitle.startsWith(clean) && bTitle.startsWith(clean)) return 1;

    // Title contains query
    if (aTitle.includes(clean) && !bTitle.includes(clean)) return -1;
    if (!aTitle.includes(clean) && bTitle.includes(clean)) return 1;

    return 0;
  });
}
