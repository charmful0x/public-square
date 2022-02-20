import styles from "../styles/Explore.module.sass";
import Image from "next/image";
import { ShareIcon, HeartIcon, MessageIcon } from "@iconicicons/react";
import Link from "next/link";
import Button from "../comp/Button/Button";
const Explore = () => {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.popular_profiles}>
          <h1>Popular communitites & profiles</h1>
          <div className={styles.popular_profile_div}>
            <div className={styles.picture_div}>
              <Link href="/">
                <img src="/profile.png" alt="" />
              </Link>
            </div>
            <div className={styles.user_name}>Marton Lederer</div>
            <div className={styles.profile_name1}>@martonlederer</div>
            <div className={styles.follow_button}>
              <Button>Follow</Button>
            </div>
          </div>
          <div className={styles.popular_profile_div}>
            <div className={styles.picture_div}>
              <Link href="/">
                <div className={styles.img}>
                  <img src="/profile.png" alt="" />
                </div>
              </Link>
            </div>
            <div className={styles.user_name}>Marton Lederer</div>
            <div className={styles.profile_name1}>@martonlederer</div>
            <div className={styles.follow_button}>
              <Button>Follow</Button>
            </div>
          </div>
          <div className={styles.popular_profile_div}>
            <div className={styles.picture_div}>
              <Link href="/">
                <div className={styles.img}>
                  <img src="/profile.png" alt="" />
                </div>
              </Link>
            </div>
            <div className={styles.user_name}>Marton Lederer</div>
            <div className={styles.profile_name1}>@martonlederer</div>
            <div className={styles.follow_button}>
              <Button>Follow</Button>
            </div>
          </div>
          <div className={styles.popular_profile_div}>
            <div className={styles.picture_div}>
              <Link href="/">
                <div className={styles.img}>
                  <img src="/profile.png" alt="" />
                </div>
              </Link>
            </div>
            <div className={styles.user_name}>Marton Lederer</div>
            <div className={styles.profile_name1}>@martonlederer</div>
            <div className={styles.follow_button}>
              <Button>Follow</Button>
            </div>
          </div>
        </div>
        <div className={styles.trending_weeves}>
          <h1>Trending weeves</h1>
          <div className={styles.trending_weeve}>
            <div className={styles.upper_post}>
              <div className={styles.left_section}>
                <div className={styles.profile_div}>
                  <img src="/profile.png" alt="profile-picutre" />
                </div>
                <div className={styles.data_user}>
                  <div className={styles.user_name}>Axel</div>
                  <div className={styles.profile_name}>@bidetaggle</div>
                </div>
              </div>
              <div className={styles.right_section}>
                <div className={styles.time}>3 hours ago</div>
                <div className={styles.link_post}>
                  <a>sf3ZF...eBCK4</a>
                </div>
              </div>
            </div>
            <div className={styles.post_content}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
            <div className={styles.below_post}>
              <div className={styles.comment_section}>
                
                <MessageIcon className={styles.post_icons} /> 10 Comments
              </div>
              <div className={styles.like_section}>
                <HeartIcon className={styles.post_icons} />
                28 likes
              </div>
              <div className={styles.share_section}>
                <ShareIcon className={styles.post_icons} />
                share
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
