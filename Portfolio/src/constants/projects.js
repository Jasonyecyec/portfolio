import ReactBank from "@/assets/react_bank.png";
import Ribrary from "@/assets/Ribrary.png";
import Patient from "@/assets/patient.jpg";
import QCUFMS from "@/assets/qcu-fms/preview.png";
import NoImage from "@/assets/no_image_available.jpg";
import RPG from "@/assets/RPG.png";
import TGNC from "@/assets/tgnc.png";

//USER SCREENSHOT
import StudentHome from "@/assets/qcu-fms/user/student-home.jpg";
import AvailableFacility from "@/assets/qcu-fms/user/available-facility.jpg";
import Login from "@/assets/qcu-fms/user/login.jpg";
import Register from "@/assets/qcu-fms/user/register.jpg";
import ForgotPass from "@/assets/qcu-fms/user/forgot-pass.jpg";
import CreateAcc from "@/assets/qcu-fms/user/create-acc.jpg";
import OTP from "@/assets/qcu-fms/user/otp.jpg";
import Scan from "@/assets/qcu-fms/user/scan.jpg";
import Report from "@/assets/qcu-fms/user/report.jpg";
import SubmitReport from "@/assets/qcu-fms/user/submit-report.jpg";
import StudentMore from "@/assets/qcu-fms/user/student-more.jpg";
import Rewards from "@/assets/qcu-fms/user/rewards.jpg";
import StudentCalendar from "@/assets/qcu-fms/user/student-calendar.jpg";
import SearchFacility from "@/assets/qcu-fms/user/search-facility.jpg";
import RateFacility from "@/assets/qcu-fms/user/rate-facility.jpg";
import StudentAcc from "@/assets/qcu-fms/user/student-acc.jpg";
import EmployeeHome from "@/assets/qcu-fms/user/employee-home.jpg";
import RequestMaintenance from "@/assets/qcu-fms/user/request-maintenance.jpg";

//ADMIN SCREENSHOT
import LoginAdmin from "@/assets/qcu-fms/admin/login.png";
import Dashboard from "@/assets/qcu-fms/admin/dashboard.png";
import UserManagement from "@/assets/qcu-fms/admin/user-management.png";
import FacilityManagement from "@/assets/qcu-fms/admin/facility-management.png";
import BuildingManagement from "@/assets/qcu-fms/admin/building-management.png";
import EventManagement from "@/assets/qcu-fms/admin/event-management.png";
import ReportManagement from "@/assets/qcu-fms/admin/report.png";
import RequestManagement from "@/assets/qcu-fms/admin/request.png";
import ServiceProvider from "@/assets/qcu-fms/admin/service-provider.png";
import RewardDashboard from "@/assets/qcu-fms/admin/reward-dashboard.png";
import RewardManagement from "@/assets/qcu-fms/admin/reward-management.png";
import StudentPointsHistory from "@/assets/qcu-fms/admin/student-points-history.png";
import RequestMaterial from "@/assets/qcu-fms/admin/request-material.png";
import Profile1 from "@/assets/qcu-fms/admin/profile1.png";
import Profile2 from "@/assets/qcu-fms/admin/profile2.png";
import Analytics1 from "@/assets/qcu-fms/admin/analytics1.png";
import Analytics2 from "@/assets/qcu-fms/admin/analytics2.png";
import Analytics3 from "@/assets/qcu-fms/admin/analytics3.png";
import Analytics4 from "@/assets/qcu-fms/admin/analytics4.png";
import Analytics5 from "@/assets/qcu-fms/admin/analytics5.png";

export const projects = [
	{
		name: "The Good Neighbor Cards",
		info: "A website for buying and selling cars and utility vehicles, featuring product listings, search, and user inquiries.",
		projectImage: TGNC,
		technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
		links: {
			github: "#",
			url: "https://tgnc.cross-unity.com/",
		},
		view: "",
	},
	{
		name: "Recruitment Global",
		info: "A global recruitment management system for efficient hiring and candidate tracking.",
		projectImage: RPG,
		technologies: [
			"Next.js",
			"React",
			"TypeScript",
			"C#",
			"Tailwind CSS",
			"ASP.NET Core Web API",
			"Open AI",
			"MySQL",
			"DigitalOcean",
		],
		links: {
			github: "https://github.com/Jasonyecyec/globalrecruitmentau",
			url: "https://www.globalrecruitment.site/",
		},
		view: "",
	},
	{
		name: "QCU-FMS",
		info: "A comprehensive system designed to simplify issue reporting, event requests, and service management for Quezon City University. ",
		projectImage: QCUFMS,
		technologies: ["React.js", "Laravel", "Tailwind CSS", "MySQL", "Open AI"],
		links: {
			github: "https://github.com/Jasonyecyec/IRRIS_mobile",
			url: "https://irris-mobile.vercel.app/",
		},
		view: "/qcu-fms",
	},
	{
		name: "HR Management System",
		info: "A system designed to streamline and automate various human resource processes",
		projectImage: NoImage,
		technologies: ["Bootstrap", "Jquery", "PHP", "MySQL", "Javascript"],
		links: {
			github: "https://github.com/Jasonyecyec/HR_DEPT",
			url: "",
		},
		view: "",
	},

	{
		name: "OtakuFlix",
		info: "OtakuFlix is the perfect online platform for all anime lovers! Stream your favorite anime, read manga and manhwa, and enjoy an unforgettable otaku experience.",
		projectImage: NoImage,
		technologies: [
			"Java",
			"React.js",
			"Firebase",
			"Tailwind CSS",
			"Spring Boot",
			"Gogoanime API",
			"Javascript",
		],
		links: {
			github: "https://github.com/Jasonyecyec/OtakuFlix",
			url: "https://otaku-flix.vercel.app/",
		},
		view: "",
	},

	{
		name: "Ribrary",
		info: "Ribray is a digital library and online social reading platform. It provides users with various copies of e-books, audiobooks, magazines, research documents, and podcasts. Users can also upload their own content and receive feedback from other users.",
		projectImage: Ribrary,
		technologies: [
			"Bootstrap",
			"PHP",
			"Jquery",
			"MySQL",
			"Javascript",
			"Googlebooks API",
		],
		links: {
			github: "https://github.com/Jasonyecyec/Ribrary",
			url: "",
		},
		view: "",
	},
	{
		name: "Patient Appointment Management System",
		info: "This system  allow patients to easily make appointments online. It can manage patient records, track appointment history, and handle doctors' availability. Additionally, it notifies patients through email regarding their scheduled appointments.",
		projectImage: Patient,
		technologies: ["Bootstrap", "ASP.NET MVC", "MySQL", "C#"],
		links: {
			github: "https://github.com/Jasonyecyec/patient_appointment",
			url: "",
		},
		view: "",
	},
];

export const FMSProject = {
	user: [
		{
			image: Login,
			alt: "login",
			description: "",
		},
		{
			image: ForgotPass,
			alt: "forgot-pass",
			description: "",
		},
		{
			image: CreateAcc,
			alt: "create-acc",
			description: "",
		},
		{
			image: Register,
			alt: "register",
			description: "",
		},
		{
			image: OTP,
			alt: "otp",
			description: "",
		},
		{
			image: StudentHome,
			alt: "student-home",
			description: "",
		},
		{
			image: Scan,
			alt: "scan",
			description: "",
		},
		{
			image: Report,
			alt: "report",
			description: "",
		},
		{
			image: SubmitReport,
			alt: "submit-report",
			description: "",
		},
		{
			image: StudentMore,
			alt: "student-more",
			description: "",
		},
		{
			image: Rewards,
			alt: "rewards",
			description: "",
		},
		{
			image: SearchFacility,
			alt: "search-facility",
			description: "",
		},
		{
			image: RateFacility,
			alt: "rate-facility",
			description: "",
		},
		{
			image: StudentCalendar,
			alt: "student-calendar",
			description: "",
		},
		{
			image: StudentAcc,
			alt: "student-acc",
			description: "",
		},
		{
			image: EmployeeHome,
			alt: "employee-home",
			description: "",
		},
		{
			image: AvailableFacility,
			alt: "available-facility",
			description: "",
		},
		{
			image: RequestMaintenance,
			alt: "request-maintenance",
			description: "",
		},
	],
	admin: [
		{
			image: LoginAdmin,
			alt: "login",
			description: "",
		},
		{
			image: Dashboard,
			alt: "dashboard",
			description: "",
		},
		{
			image: UserManagement,
			alt: "user-management",
			description: "",
		},
		{
			image: BuildingManagement,
			alt: "building-management",
			description: "",
		},
		{
			image: FacilityManagement,
			alt: "facility-management",
			description: "",
		},
		{
			image: EventManagement,
			alt: "event-management",
			description: "",
		},
		{
			image: ReportManagement,
			alt: "report-management",
			description: "",
		},
		{
			image: RequestManagement,
			alt: "request-management",
			description: "",
		},
		{
			image: ServiceProvider,
			alt: "service-provider",
			description: "",
		},
		{
			image: RewardDashboard,
			alt: "reward-dashboard",
			description: "",
		},
		{
			image: RewardManagement,
			alt: "reward-management",
			description: "",
		},
		{
			image: StudentPointsHistory,
			alt: "student-points-history",
			description: "",
		},
		{
			image: RequestMaterial,
			alt: "request-material",
			description: "",
		},
		{
			image: Profile1,
			alt: "profile1",
			description: "",
		},
		{
			image: Profile2,
			alt: "profile2",
			description: "",
		},
		{
			image: Analytics1,
			alt: "analytics1",
			description: "",
		},
		{
			image: Analytics2,
			alt: "analytics2",
			description: "",
		},
		{
			image: Analytics3,
			alt: "analytics3",
			description: "",
		},
		{
			image: Analytics4,
			alt: "analytics4",
			description: "",
		},
		{
			image: Analytics5,
			alt: "analytics5",
			description: "",
		},
	],
};
