import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.less';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>Welcome to Scott's App!</h1>
				<nav>
					<Link href="/">Home</Link>
					<Link href="/profile">My Profile</Link>
					<Link href="/profile/scott">Sample Profile</Link>
				</nav>
			</header>
		);
	}
}
