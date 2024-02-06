let yatzy = function() {
    let entity = {
      score: {
        counts: new Array(6).fill(null),
      },
      dice: new Array(5).fill(null),
    };

    function is_available(num) {
      return entity.score.counts[num - 1] === null;
    }

    entity.calculateScore = function(num) {
      if (!is_available(num)) {
        return null;
      }

      let score = 0;
      for (const d of entity.dice) {
        if (d == num) {
          score += d;
        }
      }
      return score;
    }

    entity.addCount = function(num, count) {
      entity.score.counts[num-1] = num * count;
    }

    entity.countScore = function() {
      let score = 0;
      for (const i in entity.score.counts) {
        score += entity.score.counts[i];
      }
      return score;
    }

    return entity;
  }();
