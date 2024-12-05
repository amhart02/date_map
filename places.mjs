const places = [
    {
        title: "Rexburg Idaho Temple",
        location: "750 S 2nd E Rexburg ID 83440-5404 United States",
        information: "Enjoy the scenic beauty inside or outside the Latter-Day Saint Rexburg, Idaho temple.",
        website_link: "https://www.churchofjesuschrist.org/temples/details/rexburg-idaho-temple?lang=eng",
        img: "https://www.churchofjesuschrist.org/imgs/af036291e98a7caa26e051bd65e2a37176cbbf89/full/640%2C/0/default",
        tag: "Free",
        coordinates: "43.8261,-111.7914",
    },
    {
        title: "Gravity Factory",
        location: "165 Airport Road, Rexburg, ID 83440",
        information: "Jump the night away at this trampoline park. Activities include the foam pit, climbing wall, ninja warrior course, dodgeball, trapeze, and much more trampoline fun! ",
        website_link: "https://www.gravityfactory.net/",
        img: "https://www.gravityfactory.net/wp-content/themes/jump/graphics/gravity-factory-logo.png",
        tag: "Purchase",
        coordinates: "43.8292,-111.8085",
    },
    {
        title: "FatCats",
        location: "475 N 2nd E, Rexburg, ID 83440.",
        information: "Visit your local entertainment center with movies, arcade games, bowling, and indoor mini golf!",
        website_link: "https://www.fatcatsfun.com/locations/rexburg/",
        img: "https://media.licdn.com/dms/image/v2/D560BAQFhX0LqvZuzmA/company-logo_200_200/company-logo_200_200/0/1666035800983/fatcats_logo?e=2147483647&v=beta&t=h5j61X8laDiqaFw0otWw51PDA05yGeETj6JpOqM_Eac",
        tag: "Purchase",
        coordinates: "43.8292,-111.7803",
    },
    {
        title: "Yellowstone Bear World",
        location: "6010 S Bear World Road, Rexburg ID 83440",
        information: "Experience a day of fun during spring and summer months. At Bear World you can bottle feed baby bears, enjoy amusement rides, see wildlife, and purchase your favorite gift shop items!",
        website_link: "https://yellowstonebearworld.com/",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJuYTfpHyV19irutNPiUsYXzNuAV_irFqfw&s",
        tag: "Purchase",
        coordinates: "43.7389,-111.8658",
    },
    {
        title: "St. Anthony Sand Dunes",
        location: "St Anthony, ID 83445",
        information: "View the natural beauty of Idaho at the Sand Dunes. Sled during the winter, light a bonfire, ride outdoor vehicles, and much more!",
        website_link: "https://www.blm.gov/visit/st-anthony-sand-dunes",
        img: "https://yellowstoneteton.org/wp-content/uploads/2022/02/Screen-Shot-2022-02-08-at-3.25.05-PM-768x511.jpg",
        tag: "Free",
        coordinates: "44.0151,-111.78632",
    },
    {
        title: "Rexburg Farmer's Market",
        location: "452 W. 2nd North, Rexburg, ID 83440",
        information: "Support local businesses and community and enjoy the ambiance by attending the Rexburg Farmer's Market. ",
        website_link: "http://www.rexburgfarmersmarket.org/",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEv_589AmW_9usCWYsKCc7VzhBg8MO2YXbAg&s",
        tag: "Free",
        coordinates: "43.8250,-111.7910",
    },
    {
        title: "BYU-Idaho Observatory",
        location: "George S. Romney Sciences Bldg, 525 S Center St., Rexburg, ID 83440",
        information: "Spot stars, planets, comets, and more using the BYU-Idaho observatory telescope.",
        website_link: "https://www.byui.edu/physics/observatory",
        img: "https://brightspotcdn.byui.edu/dims4/default/f230cd3/2147483647/strip/true/crop/1969x3000+0+0/resize/1600x2438!/format/webp/quality/90/?url=http%3A%2F%2Fbyu-idaho-brightspot-production-us-east-2.s3.us-east-2.amazonaws.com%2F1f%2F6d%2Fcc36d30046a786527a272df2aff8%2F130709-astronomy-52.jpg",
        tag: "Free",
        coordinates: "43.8206,-111.7836",
    },
    {
        title: 'The Menan Butte or "R" mountain',
        location: "1098 Twin Butte Rd, Menan, ID 83434",
        information: 'Take a hike on "R" mountain to see a beautiful view of Rexburg from a great height. This mountain is actually an inactive volcano!',
        website_link: "https://www.rexburgonline.com/things-to-do/r-mountain/",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFDtgL0RURsK-ZJr_GqbrMDOy_r_9b9tYOYw&s",
        tag: "Free",
        coordinates: "43.8028,-112.0000",
    },
    {
        title: "Heber Hatchets",
        location: "153 N 2nd E Street Rexburg, ID 83440",
        information: "Take a load off for the night while getting active. Activities include throwing axes, ninja stars, and more.",
        website_link: "https://heberhatchets.com/axe-throwing-rexburg/",
        img: "https://heberhatchets.com/wp-content/uploads/2019/09/hhlogo.png",
        tag: "Purchase",
        coordinates: "43.8250,-111.7803",
    },
    {
        title: "Thomas E. Ricks Gardens",
        location: "525 South Center Street Rexburg Idaho 83460",
        information: "Take a stroll in the Horticulture Gardens on BYU-Idaho campus. Enjoy the fresh air and pretty flowers.",
        website_link: "https://www.byui.edu/applied-plant-science/our-garden",
        img: "https://brightspotcdn.byui.edu/dims4/default/3f450df/2147483647/strip/true/crop/4004x4004+998+0/resize/600x600!/quality/90/?url=http%3A%2F%2Fbyu-idaho-brightspot-production-us-east-2.s3.us-east-2.amazonaws.com%2F55%2Fb3%2Fa4ac9451477c99c57104415c681b%2F190912-garden-pond-2.jpg",
        tag: "Free",
        coordinates: "43.8160,-111.7816",
    },
    {
        title: "Roots & Boots",
        location: "433 Airport Rd, Rexburg, ID 83440",
        information: "Dance the night away at this storage unit turned dancing venue. Bring your cowboy boots and boot cut jeans!",
        website_link: "https://www.instagram.com/rootsandboots_rexburg/?hl=en",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpxx0i3qv6TsHFMORzV1Gk_KCFE9TEbNXaqw&s",
        tag: "Purchase",
        coordinates: "43.8315,-111.8050",
    },
    {
        title: "Crispy Cones",
        location: "163 W Main St Suite 102, Rexburg, ID 83440",
        information: "Have a sweet tooth? Try a new version of the classic ice cream cone!",
        website_link: "https://www.thecrispycones.com/",
        img: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/restaurant/cover_square/c142cca1-e309-41ba-8c54-fc008901caa9.png",
        tag: "Purchase",
        coordinates: "43.8261,-111.7875",
    },
    {
        title: "Porter Park",
        location: "S 2nd W & 3rd W Rexburg, ID 83440",
        information: "Take a stroll outside and enjoy the amenities at Porter Park. Amenities include tennis courts, basketball courts, walking path, and a playground.",
        website_link: "https://www.rexburg.org/o/parksrecreation/page/porter-park",
        img: "https://yellowstoneteton.org/wp-content/uploads/2022/02/dji_0652.jpeg",
        tag: "Free",
        coordinates: "43.8238,-111.7915",
    },
    {
        title: "BYU-Idaho Planetarium",
        location: "10 E 2nd South, ROM 107, Rexburg, Idaho 83460",
        information: "Sit back and relax as you are taken on a journey through space in this interactive planetarium experience.",
        website_link: "https://www.byui.edu/planetarium/",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsTmJHQS8dcbiYxiZX60YF3o4lxfaOA_EVGg&s",
        tag: "Purchase",
        coordinates: "43.8238,-111.7915",
    },
    {
        title: "Nature Park",
        location: "Nature Park Dr, Rexburg, ID 83440",
        information: "Get some exercize and fresh air while playing frisbee golf in Rexburg's nature park.",
        website_link: "https://www.pdga.com/course-directory/course/nature-park",
        img: "https://d22ksth68ujgu2.cloudfront.net/7fcc6c86c99b8cf22a0f5084063e7e16_t_IMG_5261.jpg",
        tag: "Free",
        coordinates: "43.8348,-111.8002",
    },
    {
        title: "Rexburg Re-Escape",
        location: "155 W Main St. #7 Rexburg ID",
        information: "Test your skills as you visit this escape room center. Escape rooms include Houdini's Dressing Room, Extraterrestrial Escape, and Mob Boss Break-In.",
        website_link: "https://www.rexburgre-escape.com/",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdEzFX5Yc6dT-19RYchbH-mlUzx8wrWShInQ&s",
        tag: "Purchase",
        coordinates: "43.8261,-111.7875",
    },
    {
        title: "Kiwi Loco",
        location: "160 West 2nd South, Suite 106, Rexburg, ID 83440",
        information: "Enjoy a frozen yogurt treat from this self-serve yogurt and topping shop.",
        website_link: "https://www.kiwilocoyogurt.com/66/rexburg-home/",
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/C0rRbmxs25p0FR745oSNBw/348s.jpg",
        tag: "Purchase",
        coordinates: "43.8228,-111.7856",
    },
    {
        title: "Fizz Rizz: Mocktail Bar",
        location: "32 College Ave. Rexburg, ID 83440",
        information: "",
        website_link: "https://fizzrizz.com/",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFZTrXVSQsM1TKEQFqm2oi9WzELkZF5DU8oQ&s",
        tag: "Purchase",
        coordinates: "43.8186,-111.7833",
    },
    {
        title: "Jacob Spori Art Gallery",
        location: "100 E 2nd South, Rexburg, ID 83460",
        information: "Take a look at various art pieces from around the country in the Spori building on BYU-Idaho campus.",
        website_link: "https://www.byui.edu/spori-gallery/",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5mxrav1BNT4NFdAPICoe2KSPMYP4sK1aUA&s",
        tag: "Free",
        coordinates: "43.8211,-111.7814",
    },
    {
        title: "St. Anthony Ice Caves",
        location: "Island Park, ID 83429",
        information: "Explore the naturally occuring ice caves only 28 miles from Rexburg.",
        website_link: "https://www.rexburgonline.com/things-to-do/ice-caves/",
        img: "https://www.funinrexburg.com/wp-content/uploads/2015/07/icecave2-interior-panorama.jpg",
        tag: "Free",
        coordinates: "44.244661,-111.807413",
    },
]

export default places;