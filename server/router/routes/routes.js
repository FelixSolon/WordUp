'use strict';

module.exports = (app, db) => {
	
  app.get('/getwords', (req, res) => {
	db.words
	 .findAll({
		    attributes: ['word', 'definition', 'partOfSpeech'],
			limit: 10,
	 order: [ [ 'id', 'ASC' ] ]
	}).then(words => {
		console.log("10 words sent");
		console.log(words);
      res.json(words);
	}); 	
  });

  app.post('/create/user', (req, res) => {
	  console.log(req.body);
	  console.log(db.users);
    db.users.create({
	  email: req.body.email,
      profile: req.body.profile,
	  level: req.body.level,
      created_at: db.sequelize.fn('now')
    })
    .then(user => {
		console.log("New user added");
      res.json(user);
    });
  });

  app.post('/words', (req, res) => {
    db.words.create({
      content: req.body.content,
      created_at: db.sequelize.fn('now')
    })
    .then(word => {
      res.json(word);
    });
  });

  app.post('/create/userscore', (req, res) => {
    db.userScores.create({
      user_id: req.body.user_id,
	  word_id: req.body.word_id,
      score: req.body.score,
      created_at: db.sequelize.fn('now')
    })
      .then(score => {
        res.json(score);
      });
  });
  
  app.get('/users', (req, res) => {
    db.users.findAll({
      include: [
        {
          model: db.userScores,
          include: [
            {
              model: db.words
            }
          ]
        }
      ]
    }).then(users => {
      const resObj = users.map(user => {

        //tidy up the user data
        return Object.assign(
          {},
          {
            user_id: user.id,
            email: user.email,
            profile: user.profile,
            scores: user.userScores.map(score => {

              //tidy up the post data
              return Object.assign(
                {},
                {
                  score_id: score.score.id,
                  score: score.score,
                  word: score.words.map(word => {

                    //tidy up the comment data
                    return Object.assign(
                      {},
                      {
                        word_id: word.id,
                        word: word.word,
                        definition: word.definition
                      }
                    )
                  })
                }
                )
            })
          }
        )
      });
      res.json(resObj)
    });
  });


};








