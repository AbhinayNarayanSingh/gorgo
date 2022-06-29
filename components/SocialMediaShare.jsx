import {
  FacebookIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";

import {
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";

const SocialMediaShare = ({ url, setValue }) => {
  return (
    <>
      <div
        className="conatiner row SocialMediaShareContainer"
        onClick={() => setValue(false)}
      >
        <div className="SocialMediaShare col-md-4">
          <div className="row">
            <div className="col-md-6">
              <FacebookShareButton url={url}>
                <FacebookIcon /> Facebook
              </FacebookShareButton>
              <HatenaShareButton url={url}>
                <HatenaIcon /> Hatena
              </HatenaShareButton>
              <InstapaperShareButton url={url}>
                <InstapaperIcon /> Instapaper
              </InstapaperShareButton>
              <LineShareButton url={url}>
                <LineIcon /> Line
              </LineShareButton>
              <LinkedinShareButton url={url}>
                <LinkedinIcon /> Linkedin
              </LinkedinShareButton>
              <LivejournalShareButton url={url}>
                <LivejournalIcon /> Livejournal
              </LivejournalShareButton>
              <MailruShareButton url={url}>
                <MailruIcon /> Mailru
              </MailruShareButton>
              <OKShareButton url={url}>
                <OKIcon /> OK
              </OKShareButton>
              <PinterestShareButton url={url}>
                <PinterestIcon /> Pinterest
              </PinterestShareButton>
            </div>
            <div className="col-md-6">
              <PocketShareButton url={url}>
                <PocketIcon /> Pocket
              </PocketShareButton>
              <RedditShareButton url={url}>
                <RedditIcon /> Reddit
              </RedditShareButton>
              <TelegramShareButton url={url}>
                <TelegramIcon /> Telegram
              </TelegramShareButton>
              <TumblrShareButton url={url}>
                <TumblrIcon /> Tumblr
              </TumblrShareButton>
              <TwitterShareButton url={url}>
                <TwitterIcon /> Twitter
              </TwitterShareButton>
              <ViberShareButton url={url}>
                <ViberIcon /> Viber
              </ViberShareButton>
              <VKShareButton url={url}>
                <VKIcon /> VK
              </VKShareButton>
              <WhatsappShareButton url={url}>
                <WhatsappIcon /> Whatsapp
              </WhatsappShareButton>
              <WorkplaceShareButton url={url}>
                <WorkplaceIcon /> Workplace
              </WorkplaceShareButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaShare;
