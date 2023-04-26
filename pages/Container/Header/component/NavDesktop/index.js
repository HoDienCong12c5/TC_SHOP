import ButtonBasic from '@/Components/ButtonBasic';
import MyMenu from '@/Components/MyMenu';
import userUserInfo from '@/Hook/useUserInfor';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../../Header.module.scss';
import Image from 'next/image';
import { images } from '@/common/images';
import styled from 'styled-components';
export const Icon = styled(Image)`
  width: 20px;
  height: 20px;
`;
const IconNumberCart = styled.div`
  width: 17px;
  height: 18px;
  border-radius: 50%;
  position: absolute;
  left: 34px;
  top: -1px;
  font-size: 12px;
  background: rgba(6, 191, 123, 0.4);
`;
export const H1Custom = styled.h1`
 margin-bottom: 0px;
 font-size: 14px;
`;

const NavDesktop = () => {
  const [listMenuNav, setListMenuNav] = useState([]);

  const router = useRouter();
  const { isSigned,isAdmin } = userUserInfo();
  const messages = useSelector((state) => state.locale.messages);

  useEffect(() => {
    const initMenuNav = () => {
      const arrNav = [
        {
          label: (
            <H1Custom>
              <ButtonBasic
                onClick={() => router.push('/CoffeeShop')}
                className={styles['btn-item-menu']}
              >
                {messages.header.coffee}
              </ButtonBasic>
            </H1Custom>

          ),
          key: 'coffee',
        },
        {
          label: (
            <H1Custom >
              <ButtonBasic
                onClick={() => router.push('/PodShop')}
                className={styles['btn-item-menu']}
              >
                {messages.header.pod}
              </ButtonBasic>
            </H1Custom>

          ),
          key: 'pod',
        },
        {
          label: (
            <H1Custom >
              <ButtonBasic
                onClick={() => router.push('/About')}
                className={styles['btn-item-menu']}
              >
                {messages.header.about}
              </ButtonBasic>
            </H1Custom>

          ),
          key: 'about',
        },
        {
          label: (
            <H1Custom >
              <ButtonBasic
                onClick={() => router.push('/Contact')}
                className={styles['btn-item-menu']}
              >
                {messages.header.contact}
              </ButtonBasic>
            </H1Custom>

          ),
          key: 'contact',
        },
      ];
      if (!isSigned) {
        arrNav.push({
          label: (
            <H1Custom >
              <ButtonBasic
                onClick={() => router.push('/register')}
                className={styles['btn-item-menu']}
              >
                {messages.register.title}
              </ButtonBasic>
            </H1Custom>

          ),
          key: 'register',
        });
      } else {
        if(isAdmin){
          arrNav.push({
            label: (
              <H1Custom >
                <ButtonBasic
                  onClick={() => router.push('/admin')}
                  className={styles['btn-item-menu']}
                >
                  Admin
                </ButtonBasic>
              </H1Custom>

            ),
            key: 'admin',
          });
        }else{
          arrNav.push({
            label: (
              <H1Custom >
                <ButtonBasic
                  onClick={() => router.push('/MyCart')}
                  className={styles['btn-item-menu']}
                >
                  <IconNumberCart>2</IconNumberCart>
                  <Icon className="ml-3" src={images.icon.iconCart} />
                </ButtonBasic>
              </H1Custom>

            ),
            key: 'register',
          });
        }

      }

      setListMenuNav(arrNav);
    };
    initMenuNav();
  }, [isSigned]);

  return <MyMenu mode="horizontal" items={listMenuNav} />;
};

export default NavDesktop;
