CREATE TABLE `drill_feedback` (
	`id` text PRIMARY KEY NOT NULL,
	`drill` text NOT NULL,
	`author` text NOT NULL,
	`message` text NOT NULL,
	`created_at` text NOT NULL
);
