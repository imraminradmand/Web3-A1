import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const Header = () => {
	const [modalIsOpen, setModalIsOpen] = React.useState(false);
	Modal.setAppElement("#root");

	function toggleModal() {
		setModalIsOpen(!modalIsOpen);
	}

	return (
		<div className=" bg-primaryYellow m-1 w-full flex justify-between p-2">
			<Link to="/">
				<div className="flex flex-wrap items-center">
					<img
						className="  ml-10 h-20"
						src="../../TEAM-LOGO-2.png"
						alt="logo"
					/>
					<div className="flex items-center font-bold text-xl ml-5 mt-10 text-primaryGreen ">
						"The More You Watch The More Reel It Gets..."
					</div>
				</div>
			</Link>
			<div className="items-center mr-3 flex">
				<button
					onClick={toggleModal}
					className="  bg-primaryGreen border-primaryGreen border-solid border-2 hover:bg-secondaryGreen pl-3 pr-3 pt-2 pb-2 text-center rounded"
				>
					About
				</button>
				<Modal
					className=" overflow-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute w-1/2 h-3/4 bg-primaryYellow border-primaryGreen border-solid border-4 rounded"
					isOpen={modalIsOpen}
					onRequestClose={toggleModal}
					contentLabel="About Us Modal"
				>
					<div className=" text-center mt-5 pb-5 font-bold text-2xl border-b border-solid border-slate-200 rounded-t">
						About Us
					</div>
					<div className="flex justify-center mt-5">
						<a target="_blank" href="https://github.com/imraminradmand/Web3-A1">
							<button className=" bg-primaryGreen border-primaryGreen border-solid border-2 hover:bg-secondaryGreen pl-3 pr-3 pt-2 pb-2 text-center rounded">
								Github Repository
							</button>
						</a>
					</div>
					<div className="text-center mt-5 font-bold text-xl">
						Group Members
					</div>
					<div className="flex flex-wrap mt-5 ">
						<div className="justify-center w-1/2 flex  ">
							<a target="_blank" href="https://github.com/bbode837">
								<div className=" text-center">Brandon Bodemer</div>

								<img
									className=" rounded-full h-40 "
									src="https://media.licdn.com/dms/image/C5603AQHfuPZtNJZg6g/profile-displayphoto-shrink_800_800/0/1649956966026?e=1682553600&v=beta&t=nwjUrwpcM49nG4W9wJ0UZlKLHjkHVeL3SL3Yy44MNTQ"
									alt="Brandon Github"
								/>
							</a>
						</div>
						<div className="  w-1/2 flex justify-center ">
							<a target="_blank" href="https://github.com/imraminradmand">
								<div className="  text-center">Ramin Radmand</div>
								<img
									className=" rounded-full h-40"
									src="https://avatars.githubusercontent.com/u/69999501?v=4"
									alt="Ramin Github"
								/>
							</a>
						</div>
					</div>

					<div className="text-center mt-5 font-bold text-xl">
						Technology Used
					</div>
					<div className="flex flex-wrap mt-5 ">
						<div className=" w-1/3 mb-5   ">
							<div className=" text-center">React</div>
							<div className="flex justify-center">
								<img
									className="  h-20 mt-5"
									src="../../logo192.png"
									alt="React"
								/>
							</div>
						</div>
						<div className=" w-1/3 mb-5   ">
							<div className=" text-center">Tailwind CSS</div>
							<div className="flex justify-center">
								<img
									className="  h-20 mt-5"
									src="../../tailwind-css-icon.png"
									alt="Tailwind CSS"
								/>
							</div>
						</div>
						<div className=" w-1/3 mb-5  ">
							<div className=" text-center">React Router</div>
							<div className="flex justify-center">
								<img
									className="  h-20 mt-5"
									src="../../router.png"
									alt="React Router"
								/>
							</div>
						</div>
					</div>
					<button
						onClick={toggleModal}
						className=" relative float-right bottom-0 right-0 mt-2 mb-5 mr-5 bg-primaryGreen border-primaryGreen border-solid border-2 hover:bg-secondaryGreen pl-3 pr-3 pt-2 pb-2 text-center rounded"
					>
						Close
					</button>
				</Modal>
			</div>
		</div>
	);
};
export default Header;
