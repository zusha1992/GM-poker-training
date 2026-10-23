CREATE TABLE `saved_games` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL,
	`board` text NOT NULL,
	`flop_actions` text NOT NULL,
	`exercise_done` integer NOT NULL,
	`hero_marks` text NOT NULL,
	`dealer_marks` text NOT NULL,
	`avatars` text NOT NULL,
	`saved_side` text NOT NULL
);
