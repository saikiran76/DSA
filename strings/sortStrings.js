return s.split(" ")
          .sort((a, b) => {
            let returnVal = -1;
            a < b ? returnVal = -1: returnVal = 1;
            return returnVal;
          })
          .join(" ");