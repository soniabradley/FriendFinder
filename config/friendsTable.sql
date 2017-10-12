DROP DATABASE IF EXISTS FriendFinder_db;
CREATE database FriendFinder_db;

USE FriendFinder_db;

CREATE TABLE friends (
    ItemID INT(10) AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    photo VARCHAR(250) NOT NULL,
    scores INT(10) NOT NULL,
    PRIMARY KEY (ItemID)
);



INSERT INTO friends (name, photo, scores)
VALUES  ("Jack White","https://static01.nyt.com/images/2012/04/08/magazine/08white4/08white4-jumbo.jpg",["5","3","5","1","5","1","3","1","3","5"]
		);
		{
		name: "Madonna",
		photo: "https://cdn.theatlantic.com/assets/media/img/mt/2017/01/RTSWQXR/lead_large.jpg?1485185999",
		scores: [
			"5",
			"3",
			"2",
			"1",
			"5",
			"5",
			"3",
			"1",
			"1",
			"5"
			]	
		},
		{
		name: "Kurt Cobain",
		photo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Nirvana_around_1992.jpg",
		scores: [
			"5",
			"1",
			"5",
			"1",
			"5",
			"5",
			"3",
			"1",
			"5",
			"5"
			]
		},	
		{
		name: "Chris Cornell",
		photo: "http://img.wennermedia.com/620-width/r1289_fea_cornell_a-4354ec10-4030-4317-ad49-8a1c0fc1df1a.jpg",
		scores: [
			"5",
			"3",
			"5",
			"1",
			"5",
			"1",
			"3",
			"1",
			"3",
			"5"
			]
		},		
		{
		name: "Mazzy Star",
		photo: "http://cps-static.rovicorp.com/3/JPG_400/MI0001/389/MI0001389324.jpg?partner=allrovi.com",
		scores: [
			"5",
			"3",
			"5",
			"1",
			"5",
			"1",
			"3",
			"1",
			"3",
			"5"
			]});

SELECT * FROM friends;