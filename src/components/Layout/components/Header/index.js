import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/asset/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faKeyboard } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
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
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
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

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <div className={cx('tippy')}>
                    <Tippy
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
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </Tippy>
                </div>
                <div className={cx('actions')}>
                    <Button
                        large
                        text
                        leftIcon={<FontAwesomeIcon icon={faPlus} />}
                    >
                        Upload
                    </Button>
                    <Button primary large>
                        Log in
                    </Button>
                    <Menu items={MENU_ITEM} onChange={handleMenuChange}>
                        <div className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
