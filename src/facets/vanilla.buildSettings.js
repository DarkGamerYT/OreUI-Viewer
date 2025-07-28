const betaMode = false;

module.exports = () =>
    betaMode
        ? {
              isBetaBuild: true,
              isAnyBeta: true,
              isDevBuild: true,
              isEduBuild: false,
              isPreviewBuild: false,
              currentGameVersion: {
                  major: 1,
                  minor: 21,
                  patch: 0,
                  revision: 23,
                  isBeta: true,
              },
          }
        : {
              currentGameVersion: { isBeta: false, revision: 1, patch: 93, minor: 21, major: 1 },
              isBetaBuild: false,
              isAnyBeta: false,
              isDevBuild: false,
          };

