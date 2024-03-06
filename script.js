//import kaboom from "kaboom";
const container=document.querySelector(".container");
const Highradius=document.querySelector(".Highradius");
const rmp3=document.querySelector(".rmp3");
const rmp1=document.querySelector(".rmp1");
const rmp2=document.querySelector(".rmp2");
const textbox=container.querySelector(".textbox");
let containeropenornot=0;
let awardhigh1="";
let awardhigh2="";

const containeropenHighradius=()=>{
    if(containeropenornot===0){
        
        container.style.opacity="1";
        textbox.innerHTML=
        `<p class="HighRadius" id="text">
        <p style="color: rgb(0, 53, 103); font-size: 55px; font-weight: 900; text-decoration:underline;">HighRadius</p>
        <p style="display: flex; padding-top: 10px;">HighRadius has been a great experience for me, working as an intern from May 2023 to November 2023.There I have trained and worked as a software developer in Java. Our primary goal was to run, create and maintain autonomous bots using Selenium and Java for Claims and Proof of Delivery agents. During my experience I have also tested the automations for several providers and accounts managed by HRC. Managing SQL entries gave me exposure to roll-backs and mass upload through all schemas. </p>
        <p style="color: black; font-weight: 600; font-size: 15px; padding-top: 10px;">Our work flow comprised of storing data in YogSql, making connections using PuTTy, creating Selenium projects for web parsing, creating custom email agents for clients to fetch attachments and parse data using Regex codes. We also were introduced to the corporate practices such as Scrum meetings and meeting our target within a specific deadline.</p>
        <p style="color: rgb(0, 53, 103); padding-top: 10px; font-weight: 500;">Technologies worked with: Java , Selenium , JIRA By Atlassian , Clouds: AWS & Azure, SQL: YogSql, PuTTy for connections , Git , Maven and more.</p>
        <p style="padding-top: 10px; font-size: 20px;">My achievements in HighRadius were remarkable and memorable,</p>
        <p class="Award1" id="higha1" style="text-decoration: underline;">Awarded the First position in The Capstone Project</p>
        <p class="Award2" id="higha2" style="text-decoration: underline;">Won several awards in UMIXO the annual meet hosted by HighRadius</p>
        </p>`;
        containeropenornot=1;
        awardhigh1=document.querySelector("#higha1");
        awardhigh2=document.querySelector("#higha2");
        console.log(awardhigh1);
        awardhigh1.addEventListener("click",()=>{
            roadmapn.style.backgroundImage="url('Award1.png')";
            roadmapn.textContent="";
            console.log("Clicked");
            textbox.innerHTML=`<p class="HighRadius" id="text">
            <p style="color: rgb(0, 53, 103); font-size: 55px; font-weight: 900; text-decoration:underline;">Project Capstone</p>
            <p style="display: flex; padding-top: 10px;">At the beginning of our internship we were trained in using the company's UI and debugging code for errors. This was a healthy practice as coders as it considerably saved us time. Project Capstone was a competition among the interns to search and report for bugs and provide a solution for the issue. </p>
            <p style="color: black; font-weight: 600; font-size: 15px; padding-top: 10px;">We worked for 48 hours to find and resolve bugs in the provided tickets. I along with two other teammates resolved 40+ tickets along with proper documentation. </p>
            <p style="color:rgb(0,53,103); font-size: 30px; font-weight: 900; padding-top: 20px">We secured the 1st place among the teams with maximum number of issues solved within the provided time!</p>`;
        });
        awardhigh2.addEventListener("click",()=>{
            roadmapn.style.backgroundImage="url('UMIXO1.png')";
            roadmapn.textContent="";
            console.log("Clicked");
            textbox.innerHTML=`<p class="HighRadius" id="text">
            <p style="color: rgb(0, 53, 103); font-size: 55px; font-weight: 900; text-decoration:underline;">UMIXO</p>
            <p style="display: flex; padding-top: 10px;">UMIXO is an annual meet hosted by HighRadius for the employees, we as the team ARPA were given the theme of comedy and hence we had to decorate our bay and perform a dance/act performance. I looked over the bay decorations and headed a part of the interns to create the structure and a working model of an ancient 'rath'. This activity instilled unity and helped us work as a team. It also enhanced my leadership skills. </p>
            <p style="color: black; font-weight: 600; font-size: 15px; padding-top: 10px;">We worked for a week and created a castle for our bay decor putting in comit puns and using technology to control doors by voice commands. </p>
            <p style="color:rgb(0,53,103); font-size: 30px; font-weight: 900; padding-top: 20px">We secured the best bay decoration and cultural performance under our theme!</p>`;
        });
    }
    else{
        container.style.opacity="0";
        containeropenornot=0;
        roadmapn.style.backgroundImage="url('roadmap.png')";
        roadmapn.textContent="Roadmap to my Journey";
    }
}
const containeropenKalliope=()=>{
    if(containeropenornot===0){
        container.style.opacity="1";
        textbox.innerHTML=`<p class="Kalliope" id="text">
        <p style="color: rgb(0, 53, 103); font-size: 45px; font-weight: 900; text-decoration:underline;">Coordinator at Kalliope</p>
        <p style="display: flex; padding-top: 15px;">Kalliope KIIT has been an integral part of my college life. I've always had a knack for public speaking and I found Kalliope as the perfect platform for exploring wider options and opportunities to enhance my vocabulary and confidence. Kalliope has given many under confident students a chance to outshine their peers and I am priviledged to be one of guides here. </p>
        <p style="color: black; font-weight: 600; font-size: 20px; padding-top: 10px;">Not only was I a member of the society but was soon chosen to coordinate it as the society head, often conducting meetings and sharing the tips and tricks to face a crowd with a smile. I have trained over 80 juniors and several of my batchmates in the art of public speaking.</p>
        <p style="color: rgb(0, 53, 103); padding-top: 15px; font-weight: 500;">This experience helped me by making me more fluent than ever, instilling confidence like never before and also to develop and polish my managerial skills to conduct meetings and events throughout the college.</p>
        <p style="padding-top: 10px; font-size: 20px;">Some of my memorable achievements as an anchor were</p>
        <p class="Award1" id="kala1" style="text-decoration: underline;">Anchored at TEDxKIITUniversity</p>
        <p class="Award2" id="kala2" style="text-decoration: underline;">Anchored and managed events for the inauguration ceremony of batch 2022-26</p>
        </p>`;
        containeropenornot=1;
        awardhigh1=document.querySelector("#kala1");
        awardhigh2=document.querySelector("#kala2");
        console.log(awardhigh1);
        awardhigh1.addEventListener("click",()=>{
            roadmapn.style.backgroundImage="url('TEDx.png')";
            roadmapn.textContent="";
            console.log("Clicked");
            textbox.innerHTML=`<p class="HighRadius" id="text">
            <p style="color: rgb(0, 53, 103); font-size: 55px; font-weight: 900; text-decoration:underline;">TEDxKIITUniversity</p>
            <p style="display: flex; padding-top: 10px;">TEDxKIITUniversity 2023 was a grand success. Managing and anchoring the event was a real challenge for me. With recognised guests coming in for their Ted Talks we had to make sure everything was planned and executed smoothly. </p>
            <p style="color: black; font-weight: 600; font-size: 15px; padding-top: 10px;">Our practices went on for days and I along with my co-anchor Annanya had to work on our improvisation for unforseen situations. Thinking quick and following through made our work easy and nothing feels more alive than standing on the stage and addressing a keen audience.</p>
            <p style="color:rgb(0,53,103); font-size: 30px; font-weight: 900; padding-top: 20px">We were recognised by our guests in their speeches and they had a great time with us, the event was a success.</p>`;
        });
        awardhigh2.addEventListener("click",()=>{
            roadmapn.style.backgroundImage="url('Inaugural.png')";
            roadmapn.textContent="";
            console.log("Clicked");
            textbox.innerHTML=`<p class="HighRadius" id="text">
            <p style="color: rgb(0, 53, 103); font-size: 40px; font-weight: 900; text-decoration:underline;">Inauguration Ceremony 2022</p>
            <p style="display: flex; padding-top: 10px;">The Inauguration Ceremony for our juniors was held during the covid-19 pandemic, a lot of juniors were still in their hometown thus we conducted a hybrid welcome for them. I along with my co-anchor Simran had to work through a way to communicate in both online and offline mode at the same time.</p>
            <p style="color: black; font-weight: 600; font-size: 15px; padding-top: 10px;">Giving our juniors all the information required we also attended questions and had an interactive session. This was a very important event for the new batch as this was the very first time they had all met and were being addressed. </p>
            <p style="color:rgb(0,53,103); font-size: 30px; font-weight: 900; padding-top: 20px">We were praised for the way we conducted the ceremony and the juniors were very satisfied by the communication.</p>`;
        });
    }
    else{
        container.style.opacity="0";
        containeropenornot=0;
        roadmapn.style.backgroundImage="url('roadmap.png')";
        roadmapn.textContent="Roadmap to my Journey";
    }
}
const containeropenKSOM=()=>{
    if(containeropenornot===0){
        container.style.opacity="1";
        textbox.innerHTML=`<p class="KSOM" id="text">
        <p style="color: rgb(0, 53, 103); font-size: 55px; font-weight: 900; text-decoration:underline;">Designer at KSOM</p>
        <p style="display: flex; padding-top: 10px;">I was a Junior Graphic Designer here at KIIT School of Management from 10/21 to 6/22. My workflow included of creating new visuals for KSOM, CAAS and other companies accompanied to KSOM some of which include: Glossity. As a graphic designer and my first onsite internship I learned valuable lessons on corporate norms and practices of attending meetings and completing the tasks assigned to me within the deadline.  </p>
        <p style="color: black; font-weight: 600; font-size: 20px; padding-top: 10px;">Working at KSOM boosted my creativity and knowledge on designing tools, it also helped me learn proper time management to work on more than one project at a time. A part of my tasks also included video editing which added a layer to my knowledge on creative cloud applications. </p>
        <p style="color: rgb(0, 53, 103); padding-top: 10px; font-weight: 500;">The tools I worked with: Adobe-Photoshop , Adobe-Premiere-Pro , Canva , Microsoft Office , PhotoPea , Adobe-Lightroom , Google-Apps etc.</p>
        <p style="padding-top: 10px; font-size: 20px;">Some examples of my work are as follows:</p>
        <p class="Award1" id="Ksoma1" style="text-decoration: underline;">An edit made for KSCA</p>
        <p class="Award2" id="Ksoma2" style="text-decoration: underline;">An edit made for KSOM</p>
        </p>`;
        containeropenornot=1;
        awardhigh1=document.querySelector("#Ksoma1");
        awardhigh2=document.querySelector("#Ksoma2");
        console.log(awardhigh1);
        awardhigh1.addEventListener("click",()=>{
            roadmapn.style.backgroundImage="url('GraphicD1.png')";
            roadmapn.textContent="";
            console.log("Clicked");
            textbox.innerHTML=`<p class="HighRadius" id="text">
            <p style="color: rgb(0, 53, 103); font-size: 55px; font-weight: 900; text-decoration:underline;">Design for KSCA</p>
            <p style="display: flex; padding-top: 10px;">KIIT School of Computer Applications has raised multiple requests for designs related to advertisements and student comments. </p>
            <p style="color: black; font-weight: 600; font-size: 20px; padding-top: 10px;">Using Photoshop and other tools creating such edits has been an easy and creative task for me. </p>
            <p style="color:rgb(0,53,103); font-size: 25px; font-weight: 900; padding-top: 20px">Throughout the internship I enhanced my designing skills and this is one of the examples of the edits I have made.</p>`;
        });
        awardhigh2.addEventListener("click",()=>{
            roadmapn.style.backgroundImage="url('GraphicD2.png')";
            roadmapn.textContent="";
            console.log("Clicked");
            textbox.innerHTML=`<p class="HighRadius" id="text">
            <p style="color: rgb(0, 53, 103); font-size: 55px; font-weight: 900; text-decoration:underline;">Design for KSOM</p>
            <p style="display: flex; padding-top: 10px;">KIIT School of Management has had multiple design requests and even a few video editing requests throughout my internship. Creating edits using Premiere Pro and Photoshop had been a daily task for me.</p>
            <p style="color: black; font-weight: 600; font-size: 20px; padding-top: 10px;">Learning new techniques and features about the vast Adobe Creative Cloud has helped me grow and explore the variety of ways to edit designs. </p>
            <p style="color:rgb(0,53,103); font-size: 25px; font-weight: 900; padding-top: 20px">Working as an intern for over an year had made me accustomed to the meetings and this is another example of my work.</p>`;
        });
    }
    else{
        container.style.opacity="0";
        containeropenornot=0;
        roadmapn.style.backgroundImage="url('roadmap.png')";
        roadmapn.textContent="Roadmap to my Journey";
    }
}
rmp3.addEventListener("click",containeropenHighradius,false);
rmp2.addEventListener("click",containeropenKalliope,false);
rmp1.addEventListener("click",containeropenKSOM,false);
$(document).ready(function(){
    $("#roadmap").click(function(){
      $("#roadmap").toggleClass("animate");
      $(".back").toggleClass("uplifter");
    });
  });
const secret=document.querySelector(".secret");
const easteregg=document.querySelector(".back");
const roadmapn=document.querySelector("#roadmap");
const tab=document.querySelector("#easter");
easteregg.addEventListener("click",()=>{
    easteregg.textContent="You Found the egg! Scroll to the bottom!";
    secret.style.display="flex";
    tab.style.display="block";
    console.log("Clicked egg");
});

let flipper=0;
const getcodinginfo=document.querySelector(".codeinformation");
const codeinfo=document.querySelector(".codeinfo");
getcodinginfo.addEventListener("click",()=>{
    if(flipper===0){
        codeinfo.innerHTML=`
        <p style="padding-top: 15px;">Selenium: Using Selenium for automations of websites is one of my skills. I use Java Selenium and Chrome Driver to automate websites to complete elongated tasks much efficiently. Using principles of WebElements, ids, classes and xpaths I have created a Selenium Project on automating MakeMyTrip to book a ticket from the given place to the desired place with all the inputs required such as date of travel, category of seats etc.</p>
        <p style="padding-top: 15px;color:rgb(0,217,255);">SQL: Using YogSQL for writing queries and making entries during my internship at highradius has enhanced my skills with SQL. I understand the database and how to connect them making an impact on other tables and also how to sort them based on their entries. </p>
        `;
        flipper=1;
    }
    else{
        codeinfo.innerHTML=`
        <p style="padding-top: 15px;">Java: Java has been one of the first languages I ever practiced on, since our high school continued in +2 and alongside 4 years of collge. Java has provided me with the basics of OOPs. My prior internship at HighRadius was another event where my Java skills were polished.</p>
        <p style="padding-top: 15px;color:rgb(0,217,255);">HTML: Web Development has always fascinated me and I look forward to become a Full-Stack developer. Currently working through my frontend skills I have made several projects under HTML. </p>
        <p style="padding-top: 15px;">CSS: Frontend Development in today's time requires proper presentation and in order to make that possible I am thorough with CSS. This provides me a vast area to explore creativity and get a responsive website using animations and transitions.</p>
        <p style="padding-top: 15px;color: rgb(0,217,255);">JavaScript: The core of a responsive and functioning website. I have several projects under JavaScript and have been implementing it to make my webpages responsive. Creating event listeners and working with Document Object Models has helped me create a faster and much attractive webpages.</p>`;
        flipper=0;
    }
    
})

/*const topfour=document.querySelector(".topfour");
const bottomfour=document.querySelector(".bottomfour");
const phone=topfour.querySelector(".phone");
const mail=topfour.querySelector(".email");
const github=topfour.querySelector(".github");
const discord=bottomfour.querySelector(".discord");
const linkedIn=bottomfour.querySelector(".linkedIn");
const imgphone=phone.querySelector("img");

phone.addEventListener("mouseover",()=>{
    imgphone.style.display="flex";
},false);*/



//kaboom code
/*const buttonresp=document.querySelector(".kaboomclick");
buttonresp.addEventListener("click",()=>{
    

const FLOOR_HEIGHT = 48
const JUMP_FORCE = 800
const SPEED = 480

// initialize context
kaboom()

setBackground(141, 183, 255)

// load assets
loadSprite("bean", "/sprites/bean.png")

scene("game", () => {

	// define gravity
	setGravity(2400)

	// add a game object to screen
	const player = add([
		// list of components
		sprite("bean"),
		pos(80, 40),
		area(),
		body(),
	])

	// floor
	add([
		rect(width(), FLOOR_HEIGHT),
		outline(4),
		pos(0, height()),
		anchor("botleft"),
		area(),
		body({ isStatic: true }),
		color(132, 101, 236),
	])

	function jump() {
		if (player.isGrounded()) {
			player.jump(JUMP_FORCE)
		}
	}

	// jump when user press space
	onKeyPress("space", jump)
	onClick(jump)

	function spawnTree() {

		// add tree obj
		add([
			rect(48, rand(32, 96)),
			area(),
			outline(4),
			pos(width(), height() - FLOOR_HEIGHT),
			anchor("botleft"),
			color(238, 143, 203),
			move(LEFT, SPEED),
			offscreen({ destroy: true }),
			"tree",
		])

		// wait a random amount of time to spawn next tree
		wait(rand(0.5, 1.5), spawnTree)

	}

	// start spawning trees
	spawnTree()

	// lose if player collides with any game obj with tag "tree"
	player.onCollide("tree", () => {
		// go to "lose" scene and pass the score
		go("lose", score)
		burp()
		addKaboom(player.pos)
	})

	// keep track of score
	let score = 0

	const scoreLabel = add([
		text(score),
		pos(24, 24),
	])

	// increment score every frame
	onUpdate(() => {
		score++
		scoreLabel.text = score
	})

})

scene("lose", (score) => {

	add([
		sprite("bean"),
		pos(width() / 2, height() / 2 - 64),
		scale(2),
		anchor("center"),
	])

	// display score
	add([
		text(score),
		pos(width() / 2, height() / 2 + 64),
		scale(2),
		anchor("center"),
	])

	// go back to game with space is pressed
	onKeyPress("space", () => go("game"))
	onClick(() => go("game"))

})

go("game")

},false);*/