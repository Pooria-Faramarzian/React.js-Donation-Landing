import classes from './GiftFrequency.module.css';

const GiftFrequency = () => {
  return (
    <div className={classes.GiftFrequency}>
      <header className={classes.Title}>
        <h4>Gift frequency</h4>
      </header>
      <div className={classes.Frequency}>
        <div className={classes.RadioWrapper}>
          <input
            className={classes.Radio}
            id='monthly'
            type='radio'
            name='Frequency'
            checked
          />
          <label htmlFor='monthly'>Monthly</label>
        </div>
        <div className={classes.RadioWrapper}>
          <input
            className={classes.Radio}
            type='radio'
            id='one-time'
            name='Frequency'
          />
          <label htmlFor='one-time'>One time</label>
        </div>
      </div>
    </div>
  );
};

export default GiftFrequency;
