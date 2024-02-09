export const LargeAvatar = ({ avatarUrl }) => {
	return (
		<div className="avatar">
			{avatarUrl ? (
				<img
					className="avatar-image"
					src={avatarUrl}
					alt="Avatar"
				/>
			) : (
				<div className="blank-avatar" />
			)}
		</div>
	);
};
export default LargeAvatar;
