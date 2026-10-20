module.exports = {
    name: "Jack Stud LLC",
    shortName: "Jack Stud",
    owner: "Justin Davis",
    email: "justin@jackstudbuilding.com",
    phoneForTel: "828-278-4000",
    phoneFormatted: "(828) 278-4000",
    address: {
        lineOne: "444 Old Reece Rd",
        city: "Banner Elk",
        state: "NC",
        zip: "28604",
        country: "US",
        mapLink: "https://www.google.com/maps/search/?api=1&query=444+Old+Reece+Rd+Banner+Elk+NC+28604",
    },
    serviceArea: ["Boone, NC", "Banner Elk, NC", "Blowing Rock, NC", "Surrounding High Country"],
    socials: {},
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://jackstudbuilding.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
    isDemo: (process.env.URL || "").includes("netlify.app"),
};
