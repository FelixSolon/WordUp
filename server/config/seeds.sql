use WordUp;
insert into words (word, partOfSpeech, definition)
values('sacerdotal', 'adjective', 'of or relating to priests or a priesthood:priestly'),
 ('bindle stiff', 'noun', 'hobo; especially : one who carries his clothes or bedding in a bundle'),
 ('vapid', 'adjective', 'lacking flavor, zest, animation, or spirit : flat, dull'),
('hornswoggle', 'verb', 'bamboozle, hoax'),
('tin-pot', 'adjective','cheap or trivial of its kind : petty, small-time, two-bit'),
('gainsay', 'verb','to declare to be untrue or invalid'),
('intersperse', 'verb','to place something at intervals in or among'),
('maudlin', 'adjective','drunk enough to be emotionally silly'),
('pillory', 'noun',' a wooden frame for public punishment having holes in which the head and hands can be locked'),
('maieutic', 'adjective','relating to or resembling the Socratic method of eliciting new ideas from another'),
('cachinnate', 'verb','to laugh loudly or immoderately'),
('terpsichorean', 'adjective',' of or relating to dancing'),
('boniface', 'noun','the proprietor of a hotel, nightclub, or restauran'),
('hortative', 'adjective','giving exhortation : serving to advise or warn'),
 ('pooh-bah', 'noun', 'a person holding many public or private offices'),
 ('conciliate', 'verb', 'appease'),
 ('vespertine', 'adjective','of, relating to, or occurring in the evening');
 
 use WordUp; 
insert into users (email, profile, level)
values('martin@email.net', 'Won 14 spelling bees at the regional level and would like to earn a scholarship to my favorite state college',
		  98),        
      ('amanda@email.net', 'Want to ace the SAT test so I can earn a scholarship to my favorite college', 110),
      ('leslie@email.net', 'Want to improve my vocabulary so I can impress my roommate',16); 
 
 
 insert into userscores (user_id, word_id, score)
 values (1, 15, 12),
 (1, 1, 10),
 (1, 3, 12),
 (1, 5, 20),
 (1, 7, 20),
 (1, 9, 12),
 (2, 15, 20),
 (2, 16, 18),
 (2, 17, 14),
 (2, 14, 20),
 (2, 13, 10),
 (2, 12, 20),
 (2, 11, 12),
 (2, 10, 16),
 (2, 9, 4),
 (2, 8, 20),
 (3, 17, 20),
 (3, 16, 15),
 (3, 8, 10);
 