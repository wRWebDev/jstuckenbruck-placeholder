import classes from './styles.module.scss';

const ScrollAnimation = () => {
    return (
        <div className={classes.scrollWrapper}>
            <div className={classes.scrollWrapperInner}>
                <div className={classes.scrollTitle}>
                    Scroll
                </div>
                <div className={classes.scrollDown} />
            </div>
        </div>
    )
}

export default ScrollAnimation