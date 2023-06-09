'use client';
import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Chip,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    AtSymbolIcon,
    HomeIcon,
    Bars3Icon,
    XMarkIcon,
    IdentificationIcon,
    ChatBubbleOvalLeftIcon,
    BriefcaseIcon,
    PencilSquareIcon,
    Square3Stack3DIcon,
    RocketLaunchIcon,
    PhotoIcon,
    ShoppingBagIcon,
    GiftIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const colors = {
    blue: "bg-blue-50 text-blue-500",
    orange: "bg-orange-50 text-orange-500",
    green: "bg-green-50 text-green-500",
    "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
    purple: "bg-purple-50 text-purple-500",
    teal: "bg-teal-50 text-teal-500",
    cyan: "bg-cyan-50 text-cyan-500",
    pink: "bg-pink-50 text-pink-500",
};

const navListMenuItems = [
    {
        color: "green",
        icon: BriefcaseIcon,
        title: (
            <div className="flex items-center gap-1">
                Works{" "}
                <Chip
                    size="sm"
                    color="green"
                    variant="ghost"
                    value="Programing"
                    className="capitalize"
                />
            </div>
        ),
        link: "/works",
        description: "We are always looking for talented people. Join us!",
    },
    {
        color: "orange",
        icon: ChatBubbleOvalLeftIcon,
        title: "Service",
        link: "/service",
        description: "News and writings, press releases, and resources",
    },
    {
        color: "purple",
        icon: RocketLaunchIcon,
        title: "Products",
        link: "/products",
        description: "Checkout our products that helps a startup running.",
    },
    {
        color: "blue-gray",
        icon: PencilSquareIcon,
        title: "Blog",
        link: "/blog",
        description: "All the stuff that we dan from legal made us add.",
    },
    {
        color: "teal",
        icon: PhotoIcon,
        title: "Gallery",
        link: "/gallery",
        description: "Set of beautiful icons that you can use in your project.",
    },
    {
        color: "cyan",
        icon: ShoppingBagIcon,
        title: "Shop",
        link: "/shop",
        description: "High quality UI Kits helps you to 2x faster.",
    },
    {
        color: "blue",
        icon: IdentificationIcon,
        title: "About me",
        link: "/about",
        description: "Learn about our story and our mission statement.",
    },
    {
        color: "pink",
        icon: GiftIcon,
        title: "Open Source",
        link: "/chat",
        description: "List of all our open-source projects, it's all free.",
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const renderItems = navListMenuItems.map(
        ({ icon, title, description, color, link }, key) => (
            <a href={link} key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className={`rounded-lg p-5 ${colors[color]}`}>
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 w-6",
                        })}
                    </div>
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm"
                        >
                            {title}
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </a>
        )
    );

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-normal">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            <Square3Stack3DIcon className="h-[18px] w-[18px]" />
                            Portfolio
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}

function NavList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <Link href="/">
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                >
                    <ListItem className="flex items-center gap-2 py-2 pr-4">
                        <HomeIcon className="h-[18px] w-[18px]" />
                        Home
                    </ListItem>
                </Typography>
            </Link>
            <NavListMenu />
            <Link href="/contact">
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                >
                    <ListItem className="flex items-center gap-2 py-2 pr-4">
                        <AtSymbolIcon className="h-[18px] w-[18px]" />
                        Contact
                    </ListItem>
                </Typography>
            </Link>
        </List>
    );
}

export default function TopNav() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    return (
        <Navbar className="fixed inset-x-0 top-0 z-50 mx-auto max-w-screen-xl px-4 py-2">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="/"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                >
                    Sanu Islam
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <div className="hidden gap-2 lg:flex">
                    <Button variant="text" size="sm" color="blue-gray">
                        Profile
                    </Button>
                    <Link href='/pages/login'>
                        <Button variant="gradient" size="sm">
                            Login
                        </Button>
                    </Link>
                </div>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
                <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                    <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
                        Profile
                    </Button>
                    <Link href='/pages/login'>
                        <Button variant="gradient" size="sm" fullWidth>
                            Login
                        </Button>
                    </Link>
                </div>
            </Collapse>
        </Navbar>
    );
}