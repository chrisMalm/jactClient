import classes from './JactProspectSessions.module.css';
import React from 'react';
import threeAmigos from '../../assets/carousel4.jpg';

export const JactProspectSessions = () => {
	return (
		<div id='prospect' className={classes.wrapperProspect}>
			<div className={classes.prospectImg}>
				{' '}
				<img className={classes.img} src={threeAmigos} alt='' />
			</div>
			<div className={classes.prospectText}>
				<div className={classes.pT}>
					<span className={classes.titleProspect}>
						Prospect Session <br></br>
						Are you the One?
					</span>
					<div className={classes.paragraph}>
						<b>Our journey&nbsp;</b>
						have been amazing and we are overwhelmed over the clients, clubs and
						relationships we built during this years, but we also started to see
						that with our network in the foorball world we don’t have enough
						players so we can help the teams that wants player-this is our way
						to try help and fix it
					</div>
					<div className={classes.paragraph}>
						<b>A lot of people email&nbsp;</b>
						and wants to have help with their next career step and we are proud
						that you come to us for help, but a lot of the times we don’t know
						or can tell the quality by a email. And that’s exactly why we built
						the Prospect Session wich is a perfect forum to see you and get to
						know the person holding the floorball stick.<br></br>
					</div>
					<div className={classes.paragraph}>
						<b>We are always searching new players&nbsp;</b>
						who is up for the adventure, today you don't need to be one of the
						best in the world to get a new career abroad, but if you have enough
						of knowledge and quality maybe we have something for you.
					</div>

					<div className={classes.paragraph}>
						<b>You need either&nbsp;</b>
						to be out of contract after season but it also works if your current
						club give<br></br> you ”clear” to go, as long we get that in
						writing.
						<br></br>
						We are not looking to snatch players <br></br> from their current
						positions but we want to give the players who have the opportunitie
						the chance for a new adventure.<br></br>
					</div>
					<div className={classes.paragraph}>
						<b>Email us today&nbsp;</b>
						at <a href='mailto:info@jact.eu'>info@jact.eu</a> and mark it
						”Prospect Session” and we take it from there!
					</div>
				</div>
			</div>
		</div>
	);
};
