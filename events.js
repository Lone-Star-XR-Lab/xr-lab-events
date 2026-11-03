// =============================================================================
// RIC EVENTS DATA
// =============================================================================
// This is the only file you should need to edit to add, change, or remove
// an event. To add a new event:
//
//   1. Upload the flyer image into the /assets folder.
//   2. Copy one of the blocks below (from the opening { to the closing },
//      including the comma after it) and paste it into the `events` list.
//   3. Fill in the fields for your event (see notes on each field below).
//   4. Commit and push to GitHub. GitHub Pages will publish it automatically
//      within a minute or two.
//
// To remove an event early, just delete its block (or its whole entry).
// Events also disappear automatically the day after they expire, so most
// past events don't need to be manually deleted.
//
// FIELD REFERENCE — copy this block as a starting point for a new event:
//
// {
//     title: "",       // Required. The event's headline.
//     date: "YYYY-MM-DD",   // Required. Used for sorting and the "Date:" line.
//     time: "",        // Optional. Free text shown next to "Time:".
//     location: "",    // Optional. Free text shown next to "Location:".
//     course: "",      // Optional. Shown next to "Course:". Also auto-builds
//                      // a MyWorkshops registration link from this course
//                      // code when "link" below is not set.
//     description: "", // Optional. A sentence or two about the event.
//     image: "assets/your-flyer.png",   // Optional. Path to the flyer.
//     imageAlt: "",    // Recommended whenever "image" is set. Describes the
//                      // flyer for screen reader users.
//     link: "",        // Optional. If set, a button links here directly,
//                      // overriding the auto-generated "course" link.
//     linkText: "",    // Optional. Button text. Defaults to "Learn More".
//     expires: "YYYY-MM-DD" // Optional. Stays visible through this date,
//                      // then disappears the next day. Defaults to "date".
// }
// =============================================================================

const events = [

	{
		title: "Improving Durable Skills Using LEGO Serious Play",
		date: "2026-09-14",
		time: "11:00 AM",
		course: "LSC-5247",
		description:
			"Join this interactive session to learn the basics of LEGO Serious Play (LSP), a group problem-solving method using metaphor and storytelling, and explore how it can strengthen durable skills such as collaboration and critical thinking.",
		image: "assets/lego-serious-play.png",
		imageAlt: "Flyer for the Improving Durable Skills Using LEGO Serious Play workshop.",
		linkText: "Register in MyWorkshops"
	},

	{
		title: "Improving Durable Skills Using LEGO Serious Play",
		date: "2026-09-29",
		time: "2:00 PM",
		course: "LSC-5247",
		description:
			"Join this interactive session to learn the basics of LEGO Serious Play (LSP), a group problem-solving method using metaphor and storytelling, and explore how it can strengthen durable skills such as collaboration and critical thinking.",
		image: "assets/lego-serious-play.png",
		imageAlt: "Flyer for the Improving Durable Skills Using LEGO Serious Play workshop.",
		linkText: "Register in MyWorkshops"
	},

	{
		title: "Improving Durable Skills Using LEGO Serious Play",
		date: "2026-10-13",
		time: "2:00 PM – 3:00 PM",
		course: "LSC-5247",
		description:
			"Join this interactive session to learn the basics of LEGO Serious Play (LSP), a group problem-solving method using metaphor and storytelling, and explore how it can strengthen durable skills such as collaboration and critical thinking.",
		image: "assets/lego-serious-play.png",
		imageAlt: "Flyer for the Improving Durable Skills Using LEGO Serious Play workshop.",
		linkText: "Register in MyWorkshops"
	},

	{
		title: "Improving Durable Skills Using LEGO Serious Play",
		date: "2026-11-12",
		time: "2:00 PM",
		location: "Commons, C210",
		course: "LSC-5377-1",
		description:
			"Join this interactive session to learn the basics of LEGO Serious Play (LSP), a group problem-solving method using metaphor and storytelling, and explore how it can strengthen durable skills such as collaboration and critical thinking.",
		image: "assets/lego-serious-play-nov-12.png",
		imageAlt: "Flyer for the Improving Durable Skills Using LEGO Serious Play workshop on November 12 at 2 PM, framed by colorful LEGO bricks.",
		linkText: "Register in MyWorkshops"
	},

	// Putting Data to Work for You: a 3-part series, each part offered twice
	// (a morning session and an alternate afternoon date/time).

	{
		title: "Putting Data to Work for You – Session 1",
		date: "2026-09-16",
		time: "9:00 AM – 10:00 AM",
		location: "Room E253",
		course: "LSC-5248",
		description:
			"Participants will create an actionable plan for implementing at least one new practice, process, or strategy in their role using LSC data tools and AIR dashboards. This is Session 1 of the Putting Data to Work for You series.",
		image: "assets/putting-data-to-work-fall-2026.png",
		imageAlt: "Flyer for the Putting Data to Work for You workshop series.",
		linkText: "Register in MyWorkshops"
	},

	{
		title: "Putting Data to Work for You – Session 1",
		date: "2026-10-01",
		time: "2:00 PM – 3:00 PM",
		location: "Room E253",
		course: "LSC-5248",
		description:
			"Participants will create an actionable plan for implementing at least one new practice, process, or strategy in their role using LSC data tools and AIR dashboards. This is Session 1 of the Putting Data to Work for You series.",
		image: "assets/putting-data-to-work-fall-2026.png",
		imageAlt: "Flyer for the Putting Data to Work for You workshop series.",
		linkText: "Register in MyWorkshops"
	},

	{
		title: "Putting Data to Work for You – Session 2",
		date: "2026-10-14",
		time: "9:00 AM – 10:00 AM",
		location: "Room E253",
		course: "LSC-5249",
		description:
			"Continue building an actionable plan using LSC data tools and AIR dashboards to support new practices, processes, or strategies in your role. This is Session 2 of the Putting Data to Work for You series.",
		image: "assets/putting-data-to-work-fall-2026.png",
		imageAlt: "Flyer for the Putting Data to Work for You workshop series.",
		linkText: "Register in MyWorkshops"
	},

	{
		title: "Putting Data to Work for You – Session 2",
		date: "2026-10-29",
		time: "2:00 PM – 3:00 PM",
		location: "Room E253",
		course: "LSC-5249",
		description:
			"Continue building an actionable plan using LSC data tools and AIR dashboards to support new practices, processes, or strategies in your role. This is Session 2 of the Putting Data to Work for You series.",
		image: "assets/putting-data-to-work-fall-2026.png",
		imageAlt: "Flyer for the Putting Data to Work for You workshop series.",
		linkText: "Register in MyWorkshops"
	},

	{
		title: "Putting Data to Work for You – Session 3",
		date: "2026-11-11",
		time: "9:00 AM – 10:00 AM",
		location: "Room E253",
		course: "LSC-5250",
		description:
			"Apply LSC data tools and AIR dashboards to finalize an actionable plan for implementing a new practice, process, or strategy in your role. This is Session 3 of the Putting Data to Work for You series.",
		image: "assets/putting-data-to-work-fall-2026.png",
		imageAlt: "Flyer for the Putting Data to Work for You workshop series.",
		linkText: "Register in MyWorkshops"
	},

	{
		title: "Putting Data to Work for You – Session 3",
		date: "2026-11-12",
		time: "2:00 PM – 3:00 PM",
		location: "Room E253",
		course: "LSC-5250",
		description:
			"Apply LSC data tools and AIR dashboards to finalize an actionable plan for implementing a new practice, process, or strategy in your role. This is Session 3 of the Putting Data to Work for You series.",
		image: "assets/putting-data-to-work-fall-2026.png",
		imageAlt: "Flyer for the Putting Data to Work for You workshop series.",
		linkText: "Register in MyWorkshops"
	}

];
