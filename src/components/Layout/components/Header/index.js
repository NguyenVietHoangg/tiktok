import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/asset/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import {
    UploadIcon,
    AccountIcon,
    CoinsIcon,
    FeedbackIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LogoutIcon,
    MenuIcon,
    MessageIcon,
    SearchIcon,
    SettingIcon,
    ClearIcon,
    LoadIcon,
} from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
let currentUsers = true;
const MENU_ITEM = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt ',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const handleMenuChange = (menuitem) => {
        console.log(menuitem);
    };

    const usersMenu = [
        {
            icon: <AccountIcon />,
            title: 'View profile',
            to: '/feedback',
        },
        {
            icon: <CoinsIcon />,
            title: 'Get Coins',
            to: '/feedback',
        },
        {
            icon: <SettingIcon />,
            title: 'Settings',
            to: '/feedback',
        },
        ...MENU_ITEM,
        {
            icon: <LogoutIcon />,
            title: 'Logout',
            to: '/feedback',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <div className={cx('tippy')}>
                    <HeadlessTippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div
                                className={cx('search-result')}
                                tabIndex="-1"
                                {...attrs}
                            >
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>
                                        Accounts
                                    </h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input
                                placeholder="Search accounts and videos"
                                spellCheck={false}
                            />
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon
                                className={cx('loading')}
                                icon={faSpinner}
                            />

                            <button className={cx('search-btn')}>
                                <SearchIcon width="1.9rem" height="1.9rem" />
                            </button>
                        </div>
                    </HeadlessTippy>
                </div>
                <div className={cx('actions')}>
                    {currentUsers ? (
                        <>
                            <Button large text leftIcon={<UploadIcon />}>
                                Upload
                            </Button>
                            <Tippy content="Message" placement="bottom">
                                <button className={cx('round-icon')}>
                                    <MessageIcon
                                        width="2.6rem"
                                        height="2.6rem"
                                    />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('round-icon')}>
                                    <InboxIcon width="3.2rem" height="3.2rem" />
                                </button>
                            </Tippy>
                            <Menu
                                items={currentUsers ? usersMenu : MENU_ITEM}
                                onChange={handleMenuChange}
                            >
                                <button className={cx('round-icon')}>
                                    <Image
                                        src={
                                            'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f90cc529e5bacc99b1459a81ab73ca87~c5_100x100.jpeg?x-expires=1679644800&x-signature=QzGACHEt69NMzw9gSIfY%2FRLlOr0%3D'
                                        }
                                        className={cx('users-avatar')}
                                        alt={'NguyenVanA'}
                                        fallback={
                                            'https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png'
                                        }
                                    />
                                </button>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button large text leftIcon={<UploadIcon />}>
                                Upload
                            </Button>
                            <Button primary large>
                                Log in
                            </Button>
                            <Menu items={MENU_ITEM} onChange={handleMenuChange}>
                                <div className={cx('more-btn')}>
                                    <MenuIcon />
                                </div>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
export default Header;
