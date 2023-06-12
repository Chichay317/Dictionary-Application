import classes from "./Details.module.css";

const Details = ({ word }) => {
  return (
    <ul className={classes["list-wrapper"]}>
      <li className={classes.word}>
        <div className={classes.details}>
          <p>{word[0]?.word.toUpperCase()}</p>
          <span>
            {word.length > 0
              ? `${word[0]?.meanings[0]?.partOfSpeech} ${
                  word[0]?.phonetic ? word[0]?.phonetic : ""
                }`
              : ""}
          </span>
        </div>
        {word[0].phonetics[0].audio && word[0] && (
          <audio
            src={word[0].phonetics[0] && word[0].phonetics[0].audio}
            style={{ backgroundColor: "#fff", borderRadius: 10 }}
            className={classes.audio}
            controls
          >
            Your browser doesn't support audio element.
          </audio>
        )}
      </li>

      <div className={classes.content}>
        <li className={classes.meaning}>
          <div className={classes.details}>
            <p>Meaning</p>
            {word.length > 0 &&
              word?.map((mean) =>
                mean.meanings.map((item) =>
                  item.definitions.map((def) => (
                    <div className={classes["mapped-list"]}>
                      <b>{def.definition}</b>
                    </div>
                  ))
                )
              )}
          </div>
        </li>

        <li className={classes.example}>
          <div className={classes.details}>
            <p>Example</p>
            {word.length > 0 &&
              word?.map((mean) =>
                mean.meanings.map((item) =>
                  item.definitions.map((def) => (
                    <div className={classes["mapped-list"]}>
                      <b>{def.example && def.example}</b>
                    </div>
                  ))
                )
              )}
          </div>
        </li>

        <li className={classes.synonyms}>
          <div className={classes.details}>
            <p>Synonym</p>
            {word.length > 0 &&
              word?.map((mean) =>
                mean.meanings.map((item) =>
                  item.definitions.map((def) => (
                    <div className={classes["mapped-list"]}>
                      <b>{def.synonyms && def.synonyms.map((s) => `${s},`)}</b>
                    </div>
                  ))
                )
              )}
          </div>
        </li>
      </div>
    </ul>
  );
};

export default Details;
