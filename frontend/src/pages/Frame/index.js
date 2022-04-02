import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { SelectBox } from "components/SelectBox";
import { Line } from "components/Line";
import { List } from "components/List";

const FramePage = () => {
  return (
    <Column className="bg-gray_50 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <header className="self-stretch w-[100%]">
        <Column className="items-center justify-start self-stretch w-[100%]">
          <Stack className="2xl:h-[68px] 3xl:h-[81px] h-[56px] lg:h-[53px] self-stretch w-[100%] xl:h-[60px]">
            <div className="2xl:h-[68px] 3xl:h-[81px] absolute h-[56px] inset-[0] lg:h-[53px] self-stretch w-[100%] xl:h-[60px] bg-purple-700"></div>
            <Row className="absolute font-roboto h-[max-content] inset-[0] items-center justify-center m-[auto] w-[32%]">
              <Text className="2xl:text-fs14 3xl:my-[5px] 3xl:text-fs17 font-medium lg:my-[3px] lg:text-fs11 my-[4px] text-center text-fs12 text-white_A700">{`Now accepting Credit Card, Apple Pay, Paypal, and Crypto!`}</Text>
              <Stack className="2xl:h-[29px] 2xl:ml-[9px] 3xl:h-[35px] 3xl:ml-[11px] font-roboto h-[24px] lg:h-[23px] lg:ml-[7px] ml-[8px] w-[18%] xl:h-[26px]">
                <div className="2xl:h-[29px] 3xl:h-[35px] absolute bg-white_A700_19 h-[24px] inset-[0] lg:h-[23px] rounded-radius16 self-stretch w-[100%] xl:h-[26px]"></div>
                <Text className="2xl:text-fs14 3xl:text-fs17 absolute font-medium h-[max-content] inset-[0] justify-center lg:text-fs11 m-[auto] text-fs12 text-left text-white_A700 w-[max-content]">{`Moonlight`}</Text>
              </Stack>
            </Row>
          </Stack>
          <Row className="bg-white_A700 font-inter items-center justify-start self-stretch w-[100%]">
            <Image
              src="img_vector.svg"
              className="2xl:h-[28px] 2xl:mb-[39px] 2xl:ml-[56px] 2xl:mt-[38px] 3xl:h-[34px] 3xl:mb-[47px] 3xl:ml-[67px] 3xl:mt-[46px] h-[23.2px] lg:h-[22px] lg:mb-[30px] lg:ml-[43px] lg:mt-[29px] mb-[32.800003px] ml-[47px] mt-[32px] object-contain w-[2%] xl:h-[25px] xl:mb-[35px] xl:ml-[50px] xl:mt-[34px]"
              alt="Vector"
            />
            <div className="2xl:ml-[31px] 2xl:my-[26px] 3xl:ml-[37px] 3xl:my-[31px] bg-transparent border-0 lg:ml-[24px] lg:my-[20px] ml-[26.260002px] my-[22px] w-[37%] xl:ml-[28px] xl:my-[23px] input-wrap">
              <Image
                src="img_vector_1.svg"
                className="absolute top-[17.5px] bottom-[16.5px] left-[27px] bg-transparent border-0 lg:top-[16px] lg:bottom-[15px] lg:left-[25px] xl:top-[18px] xl:bottom-[17px] xl:left-[28px] 2xl:top-[21px] 2xl:bottom-[19px] 2xl:left-[32px] 3xl:top-[25px] 3xl:bottom-[23px] 3xl:left-[38px]"
                alt="Vector"
              />
              <Input
                className="2xl:pb-[19px] 2xl:pl-[60px] 2xl:pt-[21px] 2xl:text-fs13 3xl:pb-[23px] 3xl:pl-[72px] 3xl:pt-[25px] 3xl:text-fs15 bg-white_A700 border border-deep_purple_A400_66 border-solid font-normal lg:pb-[15px] lg:pl-[46px] lg:pt-[16px] lg:text-fs10 pb-[16.5px] pl-[50px] placeholder:bg-transparent placeholder:text-bluegray_300 pt-[17.5px] rounded-radius13 text-bluegray_300 text-fs11 text-left w-[100%] xl:pb-[17px] xl:pl-[53px] xl:pt-[18px]"
                name="Search by colle"
                placeholder={`Search by collection, asset, or user...`}
              ></Input>
            </div>
            <Row className="2xl:ml-[58px] 2xl:mr-[60px] 2xl:my-[26px] 3xl:ml-[70px] 3xl:mr-[72px] 3xl:my-[31px] font-inter items-center justify-center lg:ml-[45px] lg:mr-[46px] lg:my-[20px] ml-[49px] mr-[50px] my-[22px] w-[47%] xl:ml-[52px] xl:mr-[53px] xl:my-[23px]">
              <Row className="2xl:mb-[20px] 2xl:mt-[15px] 3xl:mb-[24px] 3xl:mt-[18px] items-center justify-between lg:mb-[15px] lg:mt-[12px] mb-[17px] mt-[13px] px-[0] w-[47%] xl:mb-[18px]">
                <Text className="2xl:text-fs16 3xl:text-fs20 font-normal lg:text-fs13 text-bluegray_300 text-fs14 text-left">{`Explore`}</Text>
                <Text className="2xl:text-fs16 3xl:text-fs20 font-normal lg:text-fs13 text-bluegray_300 text-fs14 text-left">{`Collections`}</Text>
                <Text className="2xl:text-fs16 3xl:text-fs20 font-normal lg:text-fs13 text-bluegray_300 text-fs14 text-left">{`Community`}</Text>
              </Row>
              <Button className="2xl:ml-[38px] 3xl:ml-[46px] bg-white_A700 border border-deep_purple_A400_66 border-solid lg:ml-[29px] ml-[32px] rounded-radius13 w-[35%] xl:ml-[34px]">
                {"Log in"}
              </Button>
              <Image
                src="img_settingsovr.svg"
                className="2xl:h-[53px] 2xl:ml-[32px] 2xl:w-[52px] 3xl:h-[64px] 3xl:ml-[38px] 3xl:w-[63px] h-[44px] lg:h-[42px] lg:ml-[25px] lg:w-[41px] ml-[27px] object-contain w-[44px] xl:h-[47px] xl:ml-[28px] xl:w-[46px]"
                alt="SETTINGSOVR"
              />
            </Row>
          </Row>
        </Column>
      </header>
      <Stack className="2xl:h-[1363px] 2xl:mt-[91px] 3xl:h-[1636px] 3xl:mt-[109px] h-[1135px] lg:h-[1060px] lg:mt-[70px] mt-[76px] self-stretch w-[100%] xl:h-[1212px] xl:mt-[81px]">
        <Column className="2xl:right-[129px] 3xl:right-[154px] absolute bg-white_A700 border-bw09 border-deep_purple_A400 border-solid font-inter items-center justify-start lg:right-[100px] right-[107.55px] rounded-radius17906977 top-[0] w-[37%] xl:right-[114px]">
          <Row className="2xl:mt-[47px] 3xl:mt-[56px] bg-gray_51 items-center justify-end lg:mt-[36px] mt-[39.399994px] mx-[auto] rounded-radius704 w-[81%] xl:mt-[42px]">
            <Text className="2xl:mb-[10px] 2xl:ml-[72px] 2xl:mt-[11px] 2xl:text-fs19 3xl:mb-[12px] 3xl:ml-[86px] 3xl:mt-[13px] 3xl:text-fs23 font-medium lg:ml-[56px] lg:my-[8px] lg:text-fs15 mb-[8.959991px] ml-[60.01001px] mt-[9.490021px] text-bluegray_301 text-center text-fs16421113967895508 tracking-ls1 xl:mb-[9px] xl:ml-[64px] xl:mt-[10px] xl:text-fs17">{`Sell Now`}</Text>
            <Row className="2xl:mb-[5px] 2xl:ml-[65px] 2xl:mr-[7px] 2xl:mt-[6px] 3xl:mb-[6px] 3xl:ml-[78px] 3xl:mr-[8px] 3xl:mt-[7px] bg-white_A700 font-inter items-center justify-center lg:mb-[3px] lg:ml-[51px] lg:mr-[5px] lg:mt-[5px] mb-[4.1799927px] ml-[54.659973px] mr-[6.1101074px] mt-[5.4200134px] rounded-radius352 shadow-bs w-[49%] xl:mb-[4px] xl:ml-[58px] xl:mr-[6px] xl:mt-[5px]">
              <Text className="2xl:mb-[5px] 2xl:ml-[47px] 2xl:mt-[4px] 2xl:text-fs19 3xl:mb-[6px] 3xl:ml-[57px] 3xl:mt-[5px] 3xl:text-fs23 font-medium lg:mb-[4px] lg:ml-[37px] lg:mt-[3px] lg:text-fs15 mb-[4.779999px] ml-[39.78003px] mt-[4.0700073px] text-center text-fs16421113967895508 text-gray_900 tracking-ls1 xl:mb-[5px] xl:ml-[42px] xl:mt-[4px] xl:text-fs17">{`Buy Now`}</Text>
              <Image
                src="img_vector_2.svg"
                className="2xl:h-[6px] 2xl:mb-[18px] 2xl:ml-[15px] 2xl:mr-[57px] 2xl:mt-[21px] 3xl:h-[7px] 3xl:mb-[22px] 3xl:ml-[18px] 3xl:mr-[69px] 3xl:mt-[25px] h-[4.69px] lg:h-[5px] lg:mb-[14px] lg:ml-[12px] lg:mr-[45px] lg:mt-[16px] mb-[15.529999px] ml-[12.889954px] mr-[48.23999px] mt-[17.630005px] object-contain w-[5%] xl:h-[6px] xl:mb-[16px] xl:ml-[13px] xl:mr-[51px] xl:mt-[18px]"
                alt="Vector"
              />
            </Row>
          </Row>
          <Column className="2xl:mt-[59px] 3xl:mt-[70px] items-center justify-start lg:mt-[45px] mt-[49.23999px] w-[100%] xl:mt-[52px]">
            <Row className="font-inter items-center justify-between px-[0] self-stretch w-[100%]">
              <Text className="2xl:ml-[43px] 2xl:text-fs10 3xl:ml-[51px] 3xl:text-fs12 font-normal lg:ml-[33px] lg:text-fs8 ml-[35.809998px] text-bluegray_300 text-fs895348834991455 text-left uppercase xl:ml-[38px] xl:text-fs9">{`your fractional nft`}</Text>
              <Text className="2xl:mr-[43px] 2xl:text-fs10 3xl:mr-[51px] 3xl:text-fs12 font-normal lg:mr-[33px] lg:text-fs8 mr-[35.819946px] text-bluegray_900 text-fs895348834991455 text-left uppercase xl:mr-[38px] xl:text-fs9">{`balance: 0 USD`}</Text>
            </Row>
            <Row className="2xl:mt-[12px] 2xl:mx-[43px] 3xl:mt-[14px] 3xl:mx-[51px] border-bw179 border-gray_300 border-solid font-satoshi items-center lg:mt-[9px] lg:mx-[33px] ml-[35.809998px] mr-[35.81px] mt-[10.179993px] rounded-radius7162791 w-[84%] xl:mt-[10px] xl:mx-[38px]">
              <Input
                className="2xl:mb-[16px] 2xl:ml-[29px] 2xl:mt-[17px] 2xl:text-fs34 3xl:ml-[34px] 3xl:my-[20px] 3xl:text-fs41 bg-transparent border-0 font-bold font-satoshi lg:ml-[22px] lg:my-[13px] lg:text-fs26 mb-[14.149994px] ml-[24.179993px] mt-[14.320007px] placeholder:bg-transparent placeholder:text-grey text-black_900 text-fs2865116310119629 text-left tracking-ls11 w-[44%] xl:ml-[25px] xl:my-[15px] xl:text-fs30"
                name="token"
                placeholder={`Token`}
              ></Input>
            </Row>
            <Row className="2xl:mt-[12px] 2xl:mx-[43px] 3xl:mt-[14px] 3xl:mx-[51px] border-bw179 border-gray_300 border-solid font-satoshi items-center lg:mt-[9px] lg:mx-[33px] ml-[35.809998px] mr-[35.81px] mt-[10.179993px] rounded-radius7162791 w-[84%] xl:mt-[10px] xl:mx-[38px]">
              <Input
                className="2xl:mb-[16px] 2xl:ml-[29px] 2xl:mt-[17px] 2xl:text-fs34 3xl:ml-[34px] 3xl:my-[20px] 3xl:text-fs41 bg-transparent border-0 font-bold font-satoshi lg:ml-[22px] lg:my-[13px] lg:text-fs26 mb-[14.149994px] ml-[24.179993px] mt-[14.320007px] placeholder:bg-transparent placeholder:text-grey text-black_900 text-fs2865116310119629 text-left tracking-ls11 w-[44%] xl:ml-[25px] xl:my-[15px] xl:text-fs30"
                name="amount"
                placeholder={`Amount`}
              ></Input>
            </Row>
          </Column>
          <Stack className="2xl:h-[35px] 2xl:mt-[25px] 3xl:h-[42px] 3xl:mt-[30px] h-[28.65px] lg:h-[27px] lg:mt-[20px] mt-[21.49002px] self-stretch w-[100%] xl:h-[31px] xl:mt-[22px]">
            <Line className="2xl:bottom-[15px] 3xl:bottom-[18px] absolute bg-gray_100 bottom-[12.53px] h-[1.79px] lg:bottom-[11px] self-stretch w-[100%] xl:bottom-[13px]" />
            <Stack className="2xl:h-[35px] 2xl:inset-x-[173px] 3xl:h-[42px] 3xl:inset-x-[207px] absolute font-inter h-[28.65px] inset-y-[0] left-[144.15px] lg:h-[27px] lg:inset-x-[134px] right-[144.16px] w-[36%] xl:h-[31px] xl:inset-x-[153px]">
              <Input
                className="2xl:pb-[6px] 2xl:pl-[8px] 2xl:pt-[9px] 2xl:text-fs17 3xl:pb-[8px] 3xl:pl-[10px] 3xl:pt-[11px] 3xl:text-fs20 absolute bg-white_A700 border-0 font-medium left-[0] lg:pb-[5px] lg:pl-[6px] lg:pt-[7px] lg:text-fs13 pb-[5.75px] pl-[7.159973px] placeholder:bg-transparent placeholder:text-black_900 pt-[8.059999px] text-black_900 text-fs14325581550598145 text-left tracking-ls1 w-[87%] xl:pb-[6px] xl:pl-[7px] xl:pt-[8px] xl:text-fs15"
                name="Shares"
                placeholder={`Shares`}
              ></Input>
              <Button className="2xl:bottom-[2px] 2xl:pb-[5px] 2xl:pl-[23px] 2xl:pr-[24px] 2xl:pt-[6px] 2xl:right-[32px] 2xl:text-fs12 3xl:bottom-[2px] 3xl:pb-[6px] 3xl:pl-[28px] 3xl:pr-[29px] 3xl:pt-[7px] 3xl:right-[38px] 3xl:text-fs15 absolute bg-gray_51 border-bw bottom-[1.79px] font-medium lg:bottom-[1px] lg:pb-[4px] lg:pl-[18px] lg:pr-[19px] lg:pt-[5px] lg:right-[25px] lg:text-fs10 pb-[4.695px] pl-[19.699951px] pr-[20.450073px] pt-[5.385px] right-[26.86px] rounded-radius269 text-center text-fs10744186401367188 text-gray_900 w-[42%] xl:bottom-[1px] xl:px-[21px] xl:py-[5px] xl:right-[28px] xl:text-fs11">{`22.16`}</Button>
              <Stack className="2xl:h-[35px] 2xl:w-[34px] 3xl:h-[42px] 3xl:w-[41px] absolute bg-white_A700 h-[28.65px] lg:h-[27px] lg:w-[26px] right-[0] rounded-radius8952593 w-[28.65px] xl:h-[31px] xl:w-[30px]">
                <Image
                  src="img_frame_1.svg"
                  className="2xl:h-[18px] 2xl:inset-[8px] 2xl:w-[17px] 3xl:h-[21px] 3xl:inset-[10px] 3xl:w-[20px] absolute h-[14.33px] inset-y-[7.1600037px] left-[7.159973px] lg:h-[14px] lg:inset-[6px] lg:w-[13px] object-contain right-[7.160034px] w-[14.33px] xl:h-[16px] xl:inset-[7px] xl:w-[15px]"
                  alt="Frame"
                />
              </Stack>
            </Stack>
          </Stack>
          <Button className="2xl:leading-lh21 2xl:mb-[47px] 2xl:mt-[29px] 2xl:mx-[43px] 2xl:pb-[16px] 2xl:pt-[13px] 2xl:px-[42px] 2xl:text-fs15 3xl:leading-lh25 3xl:mb-[56px] 3xl:mt-[34px] 3xl:mx-[51px] 3xl:pb-[19px] 3xl:pt-[16px] 3xl:px-[50px] 3xl:text-fs18 bg-green_A700 border-bw font-bold leading-lh1791 lg:leading-lh16 lg:mb-[36px] lg:mt-[22px] lg:mx-[33px] lg:pb-[12px] lg:pt-[10px] lg:px-[32px] lg:text-fs11 mb-[39.390076px] ml-[35.809998px] mr-[35.81px] mt-[24.179993px] pb-[13.339966px] pt-[11.640015px] px-[35px] rounded-radius537 text-center text-fs12534883499145508 text-white_A700 w-[84%] xl:leading-lh19 xl:mb-[42px] xl:mt-[25px] xl:mx-[38px] xl:pb-[14px] xl:pt-[12px] xl:px-[37px] xl:text-fs13">{`Mint My NFT`}</Button>
        </Column>
        
          <Stack className="2xl:h-[648px] 2xl:left-[129px] 3xl:h-[777px] 3xl:left-[154px] absolute h-[539px] left-[107.56px] lg:h-[504px] lg:left-[100px] top-[0] w-[42%] xl:h-[576px] xl:left-[114px]">
            <Stack className="2xl:h-[553px] 3xl:h-[664px] absolute h-[460.21px] inset-x-[0] lg:h-[430px] top-[0] w-[100%] xl:h-[492px]">
              <Image
                src="img_whatsappimage.png"
                className="2xl:h-[553px] 3xl:h-[664px] absolute h-[460.21px] inset-[0] lg:h-[430px] object-cover rounded-radius716 self-stretch w-[100%] xl:h-[492px]"
                alt="WhatsAppImage"
              />
              <Stack className="2xl:h-[58px] 2xl:top-[18px] 3xl:h-[70px] 3xl:top-[21px] absolute h-[48px] inset-x-[0] lg:h-[45px] lg:top-[14px] mx-[auto] top-[15.22px] w-[45%] xl:h-[52px] xl:top-[16px]">
                <div className="2xl:h-[39px] 2xl:inset-y-[9px] 3xl:bottom-[10px] 3xl:h-[47px] 3xl:top-[11px] absolute bg-white_A700 border-bw036 border-gray_301 border-solid bottom-[7.5px] h-[32.4px] inset-x-[0] lg:h-[31px] lg:inset-y-[7px] rounded-radius81 self-stretch shadow-bs1 top-[8.1px] w-[100%] xl:h-[35px] xl:inset-y-[8px]"></div>
                <Row className="2xl:left-[45px] 2xl:right-[50px] 3xl:left-[55px] 3xl:right-[60px] absolute font-inter inset-y-[0] items-center justify-center left-[38.18px] lg:left-[35px] lg:right-[39px] right-[41.88px] w-[65%] xl:left-[40px] xl:right-[44px]">
                  <div className="2xl:h-[11px] 2xl:mb-[22px] 2xl:mt-[23px] 2xl:w-[10px] 3xl:h-[13px] 3xl:mb-[27px] 3xl:mt-[28px] 3xl:w-[12px] bg-green_A700_a2 h-[8.93px] lg:h-[9px] lg:mb-[17px] lg:mt-[18px] lg:w-[8px] mb-[19.149994px] mt-[19.919998px] opacity-op8 rounded-radius50 w-[8.93px] xl:h-[10px] xl:mb-[20px] xl:mt-[21px] xl:w-[9px]"></div>
                  <Text className="2xl:leading-lh57 2xl:ml-[3px] 2xl:text-fs11 3xl:leading-lh68 3xl:ml-[3px] 3xl:text-fs13 font-bold leading-lh4776 lg:leading-lh44 lg:ml-[2px] lg:text-fs8 ml-[2.6399841px] mr-[1px] text-bluegray_901 text-fs9613844871520996 text-left tracking-ls1 w-[92%] xl:leading-lh50 xl:ml-[2px] xl:text-fs10">{`INTIAL PUBLIC OFFERING LIVE`}</Text>
                </Row>
              </Stack>
            </Stack>
            <Row className="absolute border-bw179 border-gray_300 border-solid font-inter inset-[0] justify-start rounded-radius716 self-stretch w-[100%]">
              <Column className="2xl:mb-[22px] 2xl:ml-[29px] 2xl:mt-[569px] 3xl:mb-[26px] 3xl:ml-[34px] 3xl:mt-[683px] justify-start lg:mb-[17px] lg:ml-[22px] lg:mt-[442px] mb-[18.669983px] ml-[24.169998px] mt-[474.53003px] w-[25%] xl:mb-[19px] xl:ml-[25px] xl:mt-[506px]">
                <Text className="2xl:text-fs15 3xl:text-fs18 font-medium lg:text-fs12 self-stretch text-fs13029644012451172 text-gray_600 text-left xl:text-fs13">{`Total Money Raising`}</Text>
                <Text className="2xl:mr-[12px] 2xl:text-fs17 3xl:mr-[14px] 3xl:text-fs20 font-normal lg:mr-[9px] lg:text-fs13 mr-[10px] mt-[1px] text-bluegray_900 text-fs14325581550598145 text-left xl:text-fs15">{`822k`}</Text>
              </Column>
              <Line className="2xl:h-[96px] 2xl:ml-[18px] 2xl:mt-[551px] 3xl:h-[115px] 3xl:ml-[22px] 3xl:mt-[661px] bg-gray_302 h-[79.69px] lg:h-[75px] lg:ml-[14px] lg:mt-[428px] ml-[15.570007px] mt-[459.31px] w-[0.9px] xl:h-[86px] xl:ml-[16px] xl:mt-[490px]" />
              <Column className="2xl:mb-[22px] 2xl:ml-[20px] 2xl:mt-[569px] 3xl:mb-[26px] 3xl:ml-[24px] 3xl:mt-[683px] justify-start lg:mb-[17px] lg:ml-[15px] lg:mt-[442px] mb-[18.669983px] ml-[17.01001px] mt-[474.53003px] w-[28%] xl:mb-[19px] xl:ml-[18px] xl:mt-[506px]">
                <Text className="2xl:text-fs15 3xl:text-fs18 font-medium lg:text-fs12 self-stretch text-fs13029644012451172 text-gray_600 text-left xl:text-fs13">{`Percent Money Raised`}</Text>
                <Text className="2xl:mr-[12px] 2xl:text-fs17 3xl:mr-[14px] 3xl:text-fs20 font-normal lg:mr-[9px] lg:text-fs13 mr-[10px] mt-[1px] text-bluegray_900 text-fs14325581550598145 text-left xl:text-fs15">{`97%`}</Text>
              </Column>
              <Line className="2xl:h-[96px] 2xl:ml-[17px] 2xl:mt-[551px] 3xl:h-[115px] 3xl:ml-[21px] 3xl:mt-[661px] bg-gray_302 h-[79.69px] lg:h-[75px] lg:ml-[13px] lg:mt-[428px] ml-[14.890015px] mt-[459.31px] w-[0.9px] xl:h-[86px] xl:ml-[15px] xl:mt-[490px]" />
              <Column className="2xl:mb-[22px] 2xl:ml-[15px] 2xl:mr-[31px] 2xl:mt-[569px] 3xl:mb-[26px] 3xl:ml-[18px] 3xl:mr-[38px] 3xl:mt-[683px] font-inter justify-start lg:mb-[17px] lg:ml-[11px] lg:mr-[24px] lg:mt-[442px] mb-[18.669983px] ml-[12.529999px] mr-[26.630005px] mt-[474.53003px] w-[24%] xl:mb-[19px] xl:ml-[13px] xl:mr-[28px] xl:mt-[506px]">
                <Text className="2xl:text-fs15 3xl:text-fs18 font-medium lg:text-fs12 self-stretch text-fs13029644012451172 text-gray_600 text-left xl:text-fs13">{`Total Money Raised`}</Text>
                <Text className="2xl:mr-[12px] 2xl:text-fs17 3xl:mr-[14px] 3xl:text-fs20 font-normal lg:mr-[9px] lg:text-fs13 mr-[10px] mt-[1px] text-bluegray_900 text-fs14325581550598145 text-left xl:text-fs15">{`800k`}</Text>
              </Column>
            </Row>
          </Stack>
          <Column className="absolute bottom-[0] justify-end self-stretch shadow-bs2 w-[100%]">
            
            <Column className="2xl:mb-[45px] 2xl:mt-[94px] 3xl:mb-[54px] 3xl:mt-[113px] font-inter lg:mb-[35px] lg:mt-[73px] mb-[38px] mt-[79px] self-stretch w-[100%] xl:mb-[40px] xl:mt-[84px]">
              <Text className="2xl:mx-[129px] 2xl:text-fs38 3xl:mx-[155px] 3xl:text-fs46 font-normal lg:mx-[101px] lg:text-fs30 mx-[108.22px] text-black_900 text-fs3228661346435547 text-left xl:mx-[115px] xl:text-fs34">{`About`}</Text>
              <Text className="2xl:leading-lh23 2xl:mt-[28px] 2xl:mx-[129px] 2xl:text-fs17 3xl:leading-lh28 3xl:mt-[34px] 3xl:mx-[155px] 3xl:text-fs20 font-normal leading-lh1996 lg:leading-lh18 lg:mt-[22px] lg:mx-[100px] lg:text-fs13 mt-[24px] mx-[108px] text-bluegray_900 text-fs14523985862731934 text-left w-[82%] xl:leading-lh21 xl:mt-[25px] xl:mx-[115px] xl:text-fs15">{`At this point, the meteoritic rise of Bored Ape Yacht Club from its founding in the spring of 2021 to the top of the OpenSea charts is old news. With a community boasting celebrity members ranging from NBA athletes like Steph Curry to musicians like the Chainsmokers, the BAYC shows no signs of slowing down. #BAYC4612 is Bored Ape Yacht Club #4612. In addition to Laser Eyes (found in 0.69% of Apes), two of #BAYC4612's 6 traits (Horns and Black T) are be found in just 3% of Apes.`}</Text>
              <Column className="2xl:mt-[46px] 2xl:mx-[129px] 3xl:mt-[56px] 3xl:mx-[155px] border border-gray_300 border-solid items-center justify-start lg:mt-[36px] lg:mx-[100px] mt-[39px] mx-[108px] rounded-radius8 w-[47%] xl:mt-[41px] xl:mx-[115px]">
                <List
                  className="2xl:mt-[24px] 3xl:mt-[28px] flex-wrap gap-[0] lg:mt-[18px] min-h-[auto] mt-[20px] w-[100%] xl:mt-[21px]"
                  orientation="vertical"
                >
                  <Column className="2xl:my-[12px] 3xl:my-[15px] font-inter items-center justify-start lg:my-[9px] my-[10.5px] self-stretch w-[100%] xl:my-[11px]">
                    <Row className="items-center justify-between px-[0] self-stretch w-[100%]">
                      <Text className="2xl:ml-[66px] 2xl:text-fs16 3xl:ml-[79px] 3xl:text-fs20 font-medium lg:ml-[51px] lg:text-fs13 ml-[55px] text-black_900 text-fs14 text-left tracking-ls1 xl:ml-[58px]">{`Overview`}</Text>
                      <Image
                        src="img_vector_3.svg"
                        className="2xl:h-[7px] 2xl:mb-[13px] 2xl:mr-[57px] 2xl:mt-[8px] 3xl:h-[8px] 3xl:mb-[16px] 3xl:mr-[69px] 3xl:mt-[10px] h-[5.5px] lg:h-[6px] lg:mb-[10px] lg:mr-[44px] lg:mt-[6px] mb-[11.5px] mr-[48px] mt-[7px] object-contain w-[2%] xl:h-[6px] xl:mb-[12px] xl:mr-[51px]"
                        alt="Vector"
                      />
                    </Row>
                    <Line className="2xl:mt-[26px] 3xl:mt-[31px] bg-gray_302 h-[1px] lg:mt-[20px] mt-[22px] self-stretch w-[100%] xl:mt-[23px]" />
                  </Column>
                  <Column className="2xl:my-[12px] 3xl:my-[15px] font-inter items-center justify-start lg:my-[9px] my-[10.5px] self-stretch w-[100%] xl:my-[11px]">
                    <Row className="items-center justify-between px-[0] self-stretch w-[100%]">
                      <Text className="2xl:ml-[66px] 2xl:text-fs16 3xl:ml-[79px] 3xl:text-fs20 font-medium lg:ml-[51px] lg:text-fs13 ml-[55px] text-black_900 text-fs14 text-left tracking-ls1 xl:ml-[58px]">{`Learn More`}</Text>
                      <Image
                        src="img_vector_3.svg"
                        className="2xl:h-[7px] 2xl:mb-[13px] 2xl:mr-[57px] 2xl:mt-[8px] 3xl:h-[8px] 3xl:mb-[16px] 3xl:mr-[69px] 3xl:mt-[10px] h-[5.5px] lg:h-[6px] lg:mb-[10px] lg:mr-[44px] lg:mt-[6px] mb-[11.5px] mr-[48px] mt-[7px] object-contain w-[2%] xl:h-[6px] xl:mb-[12px] xl:mr-[51px]"
                        alt="Vector"
                      />
                    </Row>
                    <Line className="2xl:mt-[26px] 3xl:mt-[31px] bg-gray_302 h-[1px] lg:mt-[20px] mt-[22px] self-stretch w-[100%] xl:mt-[23px]" />
                  </Column>
                  <Column className="2xl:my-[12px] 3xl:my-[15px] font-inter items-center justify-start lg:my-[9px] my-[10.5px] self-stretch w-[100%] xl:my-[11px]">
                    <Row className="items-center justify-between px-[0] self-stretch w-[100%]">
                      <Text className="2xl:ml-[66px] 2xl:text-fs16 3xl:ml-[79px] 3xl:text-fs20 font-medium lg:ml-[51px] lg:text-fs13 ml-[55px] text-black_900 text-fs14 text-left tracking-ls1 xl:ml-[58px]">{`Owners`}</Text>
                      <Image
                        src="img_vector_3.svg"
                        className="2xl:h-[7px] 2xl:mb-[13px] 2xl:mr-[57px] 2xl:mt-[8px] 3xl:h-[8px] 3xl:mb-[16px] 3xl:mr-[69px] 3xl:mt-[10px] h-[5.5px] lg:h-[6px] lg:mb-[10px] lg:mr-[44px] lg:mt-[6px] mb-[11.5px] mr-[48px] mt-[7px] object-contain w-[2%] xl:h-[6px] xl:mb-[12px] xl:mr-[51px]"
                        alt="Vector"
                      />
                    </Row>
                    <Line className="2xl:mt-[26px] 3xl:mt-[31px] bg-gray_302 h-[1px] lg:mt-[20px] mt-[22px] self-stretch w-[100%] xl:mt-[23px]" />
                  </Column>
                  <Column className="2xl:my-[12px] 3xl:my-[15px] font-inter items-center justify-start lg:my-[9px] my-[10.5px] self-stretch w-[100%] xl:my-[11px]">
                    <Row className="items-center justify-between px-[0] self-stretch w-[100%]">
                      <Text className="2xl:ml-[66px] 2xl:text-fs16 3xl:ml-[79px] 3xl:text-fs20 font-medium lg:ml-[51px] lg:text-fs13 ml-[55px] text-black_900 text-fs14 text-left tracking-ls1 xl:ml-[58px]">{`Trading History`}</Text>
                      <Image
                        src="img_vector_3.svg"
                        className="2xl:h-[7px] 2xl:mb-[13px] 2xl:mr-[57px] 2xl:mt-[8px] 3xl:h-[8px] 3xl:mb-[16px] 3xl:mr-[69px] 3xl:mt-[10px] h-[5.5px] lg:h-[6px] lg:mb-[10px] lg:mr-[44px] lg:mt-[6px] mb-[11.5px] mr-[48px] mt-[7px] object-contain w-[2%] xl:h-[6px] xl:mb-[12px] xl:mr-[51px]"
                        alt="Vector"
                      />
                    </Row>
                    <Line className="2xl:mt-[26px] 3xl:mt-[31px] bg-gray_302 h-[1px] lg:mt-[20px] mt-[22px] self-stretch w-[100%] xl:mt-[23px]" />
                  </Column>
                </List>
                <Row className="2xl:mb-[26px] 2xl:ml-[67px] 2xl:mr-[57px] 2xl:mt-[25px] 3xl:mb-[31px] 3xl:ml-[80px] 3xl:mr-[69px] 3xl:mt-[30px] font-inter items-center justify-between lg:mb-[20px] lg:ml-[52px] lg:mr-[44px] lg:mt-[19px] mb-[22px] ml-[56px] mr-[48px] mt-[21px] px-[0] w-[81%] xl:mb-[23px] xl:ml-[59px] xl:mr-[51px] xl:mt-[22px]">
                  <Text className="2xl:text-fs16 3xl:text-fs20 font-medium lg:text-fs13 text-black_900 text-fs14 text-left tracking-ls1">{`Blockchain Details`}</Text>
                  <Image
                    src="img_vector_3.svg"
                    className="2xl:h-[7px] 2xl:mb-[13px] 2xl:mt-[8px] 3xl:h-[8px] 3xl:mb-[16px] 3xl:mt-[10px] h-[5.5px] lg:h-[6px] lg:mb-[10px] lg:mt-[6px] mb-[11.5px] mt-[7px] object-contain w-[2%] xl:h-[6px] xl:mb-[12px]"
                    alt="Vector"
                  />
                </Row>
              </Column>
            </Column>
          </Column>

      </Stack>
      <Row className="2xl:mt-[74px] 3xl:mt-[89px] justify-between lg:mt-[57px] mt-[62px] mx-[auto] px-[0] w-[79%] xl:mt-[66px]">
        <Column className="font-inter justify-start w-[36%]">
          <Text className="2xl:text-fs38 3xl:text-fs46 font-normal lg:text-fs29 self-stretch text-bluegray_900 text-fs32 text-left xl:text-fs34">{`Explore other offerings`}</Text>
          <Text className="2xl:leading-lh16 2xl:mt-[22px] 2xl:mx-[63px] 2xl:pl-[42px] 2xl:py-[15px] 2xl:text-fs16 3xl:leading-lh20 3xl:mt-[27px] 3xl:mx-[76px] 3xl:pl-[50px] 3xl:py-[18px] 3xl:text-fs20 border-2 border-deep_purple_A400_66 border-solid font-normal leading-lh1400 lg:leading-lh13 lg:mt-[17px] lg:mx-[49px] lg:pl-[32px] lg:py-[12px] lg:text-fs13 mt-[19px] mx-[53px] pl-[35px] py-[13px] rounded-full text-bluegray_900 text-fs14 text-left w-[62%] xl:leading-lh14 xl:mt-[20px] xl:mx-[56px] xl:pl-[37px]">{`View all collections`}</Text>
          <Stack className="2xl:h-[561px] 2xl:mr-[12px] 2xl:mt-[22px] 3xl:h-[673px] 3xl:mr-[14px] 3xl:mt-[27px] h-[467px] lg:h-[436px] lg:mr-[9px] lg:mt-[17px] mr-[10px] mt-[19px] w-[93%] xl:h-[499px] xl:mt-[20px]">
            <Stack className="2xl:h-[532px] 3xl:h-[639px] absolute bg-gray_101 h-[442.86px] lg:h-[414px] rounded-radius1603 self-stretch top-[0] w-[100%] xl:h-[473px]">
              <Stack className="2xl:h-[456px] 3xl:h-[548px] absolute h-[379.73px] lg:h-[355px] self-stretch top-[0] w-[100%] xl:h-[406px]">
                <Image
                  src="img_whatsappimage_1.png"
                  className="2xl:h-[394px] 3xl:h-[473px] absolute h-[327.9px] lg:h-[307px] object-cover rounded-radius1603 self-stretch top-[0] w-[100%] xl:h-[351px]"
                  alt="WhatsAppImage"
                />
                <Stack className="2xl:h-[101px] 3xl:h-[121px] absolute bottom-[0] h-[83.56px] lg:h-[78px] self-stretch w-[100%] xl:h-[90px]">
                  <Row className="absolute bg-white_A700 bottom-[0] items-center justify-between px-[0] self-stretch w-[100%]">
                    <Column className="2xl:ml-[21px] 2xl:my-[14px] 3xl:ml-[25px] 3xl:my-[17px] justify-start lg:ml-[16px] lg:my-[11px] mb-[12.429932px] ml-[17.64px] mt-[12.070068px] w-[41%] xl:mb-[13px] xl:ml-[18px] xl:mt-[12px]">
                      <Row className="2xl:mr-[12px] 3xl:mr-[14px] font-satoshi justify-start lg:mr-[9px] ml-[1px] mr-[10px] w-[88%]">
                        <Text className="2xl:leading-lh24 2xl:text-fs12 3xl:leading-lh28 3xl:text-fs15 font-medium leading-lh2009 lg:leading-lh18 lg:text-fs9 text-center text-deep_purple_A400_a5 text-fs1048196792602539 tracking-ls1 w-[88%] xl:leading-lh21 xl:text-fs11">{`Bored Ape Yacht Club`}</Text>
                        <Image
                          src="img_vector_4.svg"
                          className="2xl:h-[12px] 2xl:mb-[8px] 2xl:ml-[4px] 2xl:mt-[5px] 3xl:h-[14px] 3xl:mb-[10px] 3xl:ml-[5px] 3xl:mt-[6px] h-[9.28px] lg:h-[9px] lg:mb-[6px] lg:ml-[3px] lg:mt-[4px] mb-[7.079956px] ml-[3.8399963px] mr-[1px] mt-[4.6400146px] object-contain w-[8%] xl:h-[10px] xl:mb-[7px] xl:ml-[4px] xl:mt-[4px]"
                          alt="Vector"
                        />
                      </Row>
                      <Column className="font-satoshi items-center mt-[1px] self-stretch w-[100%]">
                        <Text className="2xl:text-fs20 3xl:text-fs24 font-bold lg:text-fs15 mx-[auto] self-stretch text-black_900 text-center text-fs1673918342590332 tracking-ls1 xl:text-fs17">{`Bored Ape #2661`}</Text>
                      </Column>
                    </Column>
                    <Stack className="2xl:h-[51px] 2xl:mb-[4px] 2xl:mr-[18px] 2xl:mt-[26px] 3xl:h-[61px] 3xl:mb-[5px] 3xl:mr-[22px] 3xl:mt-[32px] font-inter h-[42px] lg:h-[40px] lg:mb-[3px] lg:mr-[14px] lg:mt-[20px] mb-[3.5px] mr-[15.790009px] mt-[22.28003px] w-[20%] xl:h-[45px] xl:mb-[3px] xl:mr-[16px] xl:mt-[23px]">
                      <div className="2xl:bottom-[10px] 2xl:h-[29px] 2xl:top-[11px] 3xl:bottom-[12px] 3xl:h-[35px] 3xl:top-[13px] absolute bg-green_A700 border-bw031 border-gray_301 border-solid bottom-[8.45px] h-[24.11px] inset-x-[0] lg:bottom-[7px] lg:h-[23px] lg:top-[8px] rounded-radius36 self-stretch shadow-bs3 top-[9.44px] w-[100%] xl:bottom-[9px] xl:h-[26px] xl:top-[10px]"></div>
                      <Text className="2xl:leading-lh50 2xl:left-[17px] 2xl:right-[18px] 2xl:text-fs10 3xl:leading-lh60 3xl:left-[21px] 3xl:right-[22px] 3xl:text-fs12 absolute font-bold inset-y-[0] leading-lh4178 left-[14.68px] lg:leading-lh38 lg:left-[13px] lg:right-[14px] lg:text-fs7 right-[15.31px] text-fs8411380767822266 text-left text-white_A700 tracking-ls1 w-[54%] xl:leading-lh44 xl:left-[15px] xl:right-[16px] xl:text-fs8">{`Buy Now`}</Text>
                    </Stack>
                  </Row>
                  <Image
                    src="img_heartcircleve.svg"
                    className="2xl:h-[40px] 2xl:right-[18px] 2xl:w-[39px] 3xl:h-[47px] 3xl:right-[22px] 3xl:w-[46px] absolute h-[32.5px] lg:h-[31px] lg:right-[14px] lg:w-[30px] object-contain right-[15.78px] top-[0] w-[32.5px] xl:h-[35px] xl:right-[16px] xl:w-[34px]"
                    alt="HeartCircleVe"
                  />
                </Stack>
              </Stack>
              <Stack className="2xl:h-[47px] 2xl:top-[12px] 3xl:h-[57px] 3xl:top-[14px] absolute h-[39px] inset-x-[0] lg:h-[37px] lg:top-[9px] mx-[auto] top-[10.21px] w-[56%] xl:h-[42px] xl:top-[10px]">
                <div className="2xl:h-[32px] 2xl:inset-y-[7px] 3xl:h-[38px] 3xl:inset-y-[9px] absolute bg-white_A700 border-bw029 border-gray_301 border-solid h-[26px] inset-x-[0] inset-y-[6.5px] lg:h-[25px] lg:inset-y-[6px] rounded-radius65 self-stretch shadow-bs4 w-[100%] xl:h-[28px] xl:inset-y-[6px]"></div>
                <Row className="2xl:left-[36px] 2xl:right-[37px] 3xl:inset-x-[44px] absolute font-inter inset-y-[0] items-center justify-center left-[30.64px] lg:left-[28px] lg:right-[29px] right-[31.1px] w-[66%] xl:left-[32px] xl:right-[33px]">
                  <div className="2xl:h-[9px] 2xl:my-[19px] 2xl:w-[8px] 3xl:h-[11px] 3xl:mb-[22px] 3xl:mt-[23px] 3xl:w-[10px] bg-green_A700_a2 h-[7.16px] lg:h-[7px] lg:my-[14px] lg:w-[6px] mb-[15.859985px] mt-[15.97998px] opacity-op8 rounded-radius50 w-[7.16px] xl:h-[8px] xl:mb-[16px] xl:mt-[17px] xl:w-[7px]"></div>
                  <Text className="2xl:leading-lh46 2xl:ml-[4px] 2xl:text-fs9 3xl:leading-lh55 3xl:ml-[5px] 3xl:text-fs11 font-bold leading-lh3832 lg:leading-lh35 lg:ml-[3px] lg:text-fs7 ml-[4.1399994px] text-bluegray_901 text-fs7714144706726074 text-left tracking-ls1 w-[91%] xl:leading-lh40 xl:ml-[4px] xl:text-fs8">{`INTIAL PUBLIC OFFERING LIVE`}</Text>
                </Row>
              </Stack>
            </Stack>
            <Row className="absolute bottom-[1px] inset-x-[0] justify-between mx-[auto] px-[0] w-[89%]">
              <Row className="items-center justify-between px-[0] w-[65%]">
                <Stack className="2xl:h-[105px] 3xl:h-[126px] font-inter h-[87px] lg:h-[82px] w-[34%] xl:h-[93px]">
                  <Text className="2xl:leading-lh104 2xl:text-fs15 3xl:leading-lh125 3xl:text-fs18 absolute font-bold leading-lh8688 left-[1px] lg:leading-lh81 lg:text-fs11 text-black_900 text-fs1249325942993164 text-left tracking-ls1 w-[63%] xl:leading-lh92 xl:text-fs13">{`$822K`}</Text>
                  <Text className="2xl:leading-lh11 2xl:text-fs9 2xl:top-[13px] 3xl:leading-lh13 3xl:text-fs11 3xl:top-[15px] absolute font-bold leading-lh953 lg:leading-lh8 lg:text-fs7 lg:top-[10px] self-stretch text-fs8060871124267578 text-gray_500 text-left top-[11.03px] tracking-ls1 w-[100%] xl:leading-lh10 xl:text-fs8 xl:top-[11px]">
                    {
                      <>
                        {`TOTAL `}
                        <br />
                        {`MONEY RAISING`}
                      </>
                    }
                  </Text>
                </Stack>
                <Stack className="2xl:h-[105px] 3xl:h-[126px] font-inter h-[87px] lg:h-[82px] w-[20%] xl:h-[93px]">
                  <Text className="2xl:leading-lh104 2xl:text-fs15 3xl:leading-lh125 3xl:text-fs18 absolute font-bold leading-lh8688 left-[1px] lg:leading-lh81 lg:text-fs11 text-black_900 text-fs1249325942993164 text-left tracking-ls1 w-[68%] xl:leading-lh92 xl:text-fs13">{`97%`}</Text>
                  <Text className="2xl:leading-lh11 2xl:text-fs9 2xl:top-[13px] 3xl:leading-lh13 3xl:text-fs11 3xl:top-[15px] absolute font-bold leading-lh953 lg:leading-lh8 lg:text-fs7 lg:top-[10px] self-stretch text-fs8060871124267578 text-gray_500 text-left top-[11.03px] tracking-ls1 w-[100%] xl:leading-lh10 xl:text-fs8 xl:top-[11px]">
                    {
                      <>
                        {`PERCENT `}
                        <br />
                        {`RAISED`}
                      </>
                    }
                  </Text>
                </Stack>
                <Stack className="2xl:h-[105px] 3xl:h-[126px] font-inter h-[87px] lg:h-[82px] w-[17%] xl:h-[93px]">
                  <Text className="2xl:leading-lh104 2xl:text-fs15 3xl:leading-lh125 3xl:text-fs18 absolute font-bold leading-lh8688 left-[1px] lg:leading-lh81 lg:text-fs11 text-black_900 text-fs1249325942993164 text-left tracking-ls1 w-[71%] xl:leading-lh92 xl:text-fs13">{`$15`}</Text>
                  <Text className="2xl:leading-lh11 2xl:text-fs9 2xl:top-[13px] 3xl:leading-lh13 3xl:text-fs11 3xl:top-[15px] absolute font-bold leading-lh953 lg:leading-lh8 lg:text-fs7 lg:top-[10px] self-stretch text-fs8060871124267578 text-gray_500 text-left top-[11.03px] tracking-ls1 w-[100%] xl:leading-lh10 xl:text-fs8 xl:top-[11px]">
                    {
                      <>
                        {`PRICE `}
                        <br />
                        {`/ SHARE`}
                      </>
                    }
                  </Text>
                </Stack>
              </Row>
              <Stack className="2xl:h-[51px] 2xl:mb-[38px] 2xl:mt-[15px] 3xl:h-[61px] 3xl:mb-[45px] 3xl:mt-[19px] font-inter h-[42px] lg:h-[40px] lg:mb-[29px] lg:mt-[12px] mb-[31.79004px] mr-[1px] mt-[13.209961px] w-[23%] xl:h-[45px] xl:mb-[33px] xl:mt-[14px]">
                <div className="2xl:bottom-[10px] 2xl:h-[29px] 2xl:top-[11px] 3xl:bottom-[12px] 3xl:h-[35px] 3xl:top-[13px] absolute bg-white_A700_63 border-bw031 border-gray_301 border-solid bottom-[8.46px] h-[24.11px] inset-x-[0] lg:bottom-[7px] lg:h-[23px] lg:top-[8px] rounded-radius36 self-stretch shadow-bs3 top-[9.43px] w-[100%] xl:bottom-[9px] xl:h-[26px] xl:top-[10px]"></div>
                <Text className="2xl:inset-x-[12px] 2xl:leading-lh50 2xl:text-fs10 3xl:inset-x-[15px] 3xl:leading-lh60 3xl:text-fs12 absolute font-bold inset-y-[0] leading-lh4178 left-[10.49px] lg:inset-x-[9px] lg:leading-lh38 lg:text-fs7 right-[10.5px] text-bluegray_901 text-fs8411380767822266 text-left tracking-ls1 w-[68%] xl:inset-x-[11px] xl:leading-lh44 xl:text-fs8">{`Learn More`}</Text>
              </Stack>
            </Row>
          </Stack>
        </Column>
        <Column className="2xl:mb-[49px] 2xl:mt-[19px] 3xl:mb-[58px] 3xl:mt-[23px] justify-start lg:mb-[38px] lg:mt-[14px] mb-[40.849976px] mt-[16px] w-[47%] xl:mb-[43px] xl:mt-[17px]">
          <Column className="font-inter self-stretch w-[100%]">
            <Text className="2xl:ml-[10px] 2xl:mr-[12px] 2xl:text-fs38 3xl:ml-[13px] 3xl:mr-[14px] 3xl:text-fs46 font-normal lg:ml-[8px] lg:mr-[9px] lg:text-fs29 ml-[9.109985px] mr-[10px] text-black_900 text-fs32 text-left xl:ml-[9px] xl:text-fs34">{`Frequently asked questions`}</Text>
          </Column>
          <Stack className="2xl:h-[584px] 2xl:mt-[33px] 3xl:h-[701px] 3xl:mt-[40px] font-inter h-[486.15px] lg:h-[454px] lg:mt-[26px] mt-[28px] self-stretch w-[100%] xl:h-[519px] xl:mt-[29px]">
            <Column className="absolute bottom-[0] inset-x-[0] justify-start mx-[auto] w-[99%]">
              <div className="bg-transparent border-0 self-stretch w-[100%] input-wrap">
                <Image
                  src="img_vector_5.svg"
                  className="absolute left-[25.809998px] bg-transparent border-0 lg:left-[24px] lg:inset-y-[26px] xl:left-[27px] xl:inset-y-[29px] 2xl:left-[30px] 2xl:inset-y-[33px] 3xl:left-[37px] 3xl:inset-y-[40px] inset-y-[28.03px]"
                  alt="Vector"
                />
                <Input
                  className="2xl:pl-[61px] 2xl:py-[33px] 2xl:text-fs19 3xl:pl-[73px] 3xl:py-[40px] 3xl:text-fs23 bg-white_A700 border-0 font-normal lg:pl-[47px] lg:py-[26px] lg:text-fs15 pl-[51.099998px] placeholder:bg-transparent placeholder:text-black_900 py-[28.03px] rounded-radius8742754 text-black_900 text-fs1621122169494629 text-left w-[100%] xl:pl-[54px] xl:py-[29px] xl:text-fs17"
                  name="What is a buy o"
                  placeholder={`What is a buy out?`}
                ></Input>
              </div>
              <div className="2xl:mt-[39px] 3xl:mt-[47px] bg-transparent border-0 lg:mt-[30px] mt-[33px] self-stretch w-[100%] xl:mt-[35px] input-wrap">
                <Image
                  src="img_vector_5.svg"
                  className="absolute left-[25.809998px] bg-transparent border-0 lg:left-[24px] lg:inset-y-[26px] xl:left-[27px] xl:inset-y-[29px] 2xl:left-[30px] 2xl:inset-y-[33px] 3xl:left-[37px] 3xl:inset-y-[40px] inset-y-[28.03px]"
                  alt="Vector"
                />
                <Input
                  className="2xl:pl-[61px] 2xl:py-[33px] 2xl:text-fs19 3xl:pl-[73px] 3xl:py-[40px] 3xl:text-fs23 bg-white_A700 border-0 font-normal lg:pl-[47px] lg:py-[26px] lg:text-fs15 pl-[51.099998px] placeholder:bg-transparent placeholder:text-black_900 py-[28.03px] rounded-radius8742754 text-black_900 text-fs1621122169494629 text-left w-[100%] xl:pl-[54px] xl:py-[29px] xl:text-fs17"
                  name="What is a buy o"
                  placeholder={`What is a buy out?`}
                ></Input>
              </div>
              <div className="2xl:mt-[39px] 3xl:mt-[47px] bg-transparent border-0 lg:mt-[30px] mt-[32.999878px] self-stretch w-[100%] xl:mt-[35px] input-wrap">
                <Image
                  src="img_vector_5.svg"
                  className="absolute left-[25.809998px] bg-transparent border-0 lg:left-[24px] lg:inset-y-[26px] xl:left-[27px] xl:inset-y-[29px] 2xl:left-[30px] 2xl:inset-y-[33px] 3xl:left-[37px] 3xl:inset-y-[40px] inset-y-[28.03px]"
                  alt="Vector"
                />
                <Input
                  className="2xl:pl-[61px] 2xl:py-[33px] 2xl:text-fs19 3xl:pl-[73px] 3xl:py-[40px] 3xl:text-fs23 bg-white_A700 border-0 font-normal lg:pl-[47px] lg:py-[26px] lg:text-fs15 pl-[51.099998px] placeholder:bg-transparent placeholder:text-black_900 py-[28.03px] rounded-radius8742754 text-black_900 text-fs1621122169494629 text-left w-[100%] xl:pl-[54px] xl:py-[29px] xl:text-fs17"
                  name="What is a buy o"
                  placeholder={`What is a buy out?`}
                ></Input>
              </div>
              <div className="2xl:mt-[39px] 3xl:mt-[47px] bg-transparent border-0 lg:mt-[30px] mt-[33px] self-stretch w-[100%] xl:mt-[35px] input-wrap">
                <Image
                  src="img_vector_5.svg"
                  className="absolute left-[25.809998px] bg-transparent border-0 lg:left-[24px] lg:inset-y-[26px] xl:left-[27px] xl:inset-y-[29px] 2xl:left-[30px] 2xl:inset-y-[33px] 3xl:left-[37px] 3xl:inset-y-[40px] inset-y-[28.03px]"
                  alt="Vector"
                />
                <Input
                  className="2xl:pl-[61px] 2xl:py-[33px] 2xl:text-fs19 3xl:pl-[73px] 3xl:py-[40px] 3xl:text-fs23 bg-white_A700 border-0 font-normal lg:pl-[47px] lg:py-[26px] lg:text-fs15 pl-[51.099998px] placeholder:bg-transparent placeholder:text-black_900 py-[28.03px] rounded-radius8742754 text-black_900 text-fs1621122169494629 text-left w-[100%] xl:pl-[54px] xl:py-[29px] xl:text-fs17"
                  name="What is a buy o"
                  placeholder={`What is a buy out?`}
                ></Input>
              </div>
              <div className="2xl:mt-[39px] 3xl:mt-[47px] bg-transparent border-0 lg:mt-[30px] mt-[32.999878px] self-stretch w-[100%] xl:mt-[35px] input-wrap">
                <Image
                  src="img_vector_5.svg"
                  className="absolute left-[25.809998px] bg-transparent border-0 lg:left-[24px] lg:inset-y-[26px] xl:left-[27px] xl:inset-y-[29px] 2xl:left-[30px] 2xl:inset-y-[33px] 3xl:left-[37px] 3xl:inset-y-[40px] inset-y-[28.03px]"
                  alt="Vector"
                />
                <Input
                  className="2xl:pl-[61px] 2xl:py-[33px] 2xl:text-fs19 3xl:pl-[73px] 3xl:py-[40px] 3xl:text-fs23 bg-white_A700 border-0 font-normal lg:pl-[47px] lg:py-[26px] lg:text-fs15 pl-[51.099998px] placeholder:bg-transparent placeholder:text-black_900 py-[28.03px] rounded-radius8742754 text-black_900 text-fs1621122169494629 text-left w-[100%] xl:pl-[54px] xl:py-[29px] xl:text-fs17"
                  name="What is a buy o"
                  placeholder={`What is a buy out?`}
                ></Input>
              </div>
            </Column>
            
          </Stack>
        </Column>
      </Row>
      <Column className="2xl:mt-[16px] 3xl:mt-[20px] bg-white_A700 font-inter justify-start lg:mt-[13px] mt-[14px] self-stretch w-[100%]">
        <Text className="2xl:mt-[110px] 2xl:mx-[132px] 2xl:text-fs38 3xl:mt-[132px] 3xl:mx-[158px] 3xl:text-fs46 font-normal lg:mt-[85px] lg:mx-[102px] lg:text-fs29 mt-[92px] mx-[110px] text-bluegray_900 text-fs32 text-left xl:mt-[98px] xl:mx-[117px] xl:text-fs34">
          <span className="text-bluegray_900 text-fs32 font-inter text-left font-normal lg:text-fs29 xl:text-fs34 2xl:text-fs38 3xl:text-fs46">
            <>{`More `}</>
          </span>
          <span className="text-bluegray_900 text-fs32 font-inter text-left font-normal lg:text-fs29 xl:text-fs34 2xl:text-fs38 3xl:text-fs46">
            <>{`about us`}</>
          </span>
          <span className="text-bluegray_900 text-fs32 font-inter text-left font-normal lg:text-fs29 xl:text-fs34 2xl:text-fs38 3xl:text-fs46">
            <>{`...`}</>
          </span>
        </Text>
        <Text className="2xl:ml-[132px] 2xl:mr-[87px] 2xl:mt-[30px] 2xl:text-fs24 3xl:ml-[158px] 3xl:mr-[105px] 3xl:mt-[36px] 3xl:text-fs28 font-normal lg:ml-[102px] lg:mr-[68px] lg:mt-[23px] lg:text-fs18 ml-[110px] mr-[73px] mt-[25px] text-black_900 text-fs20 text-left tracking-ls11 xl:ml-[117px] xl:mr-[77px] xl:mt-[26px] xl:text-fs21">{`Take a look at our community to learn more about Moonlight and help shape the future of fractional NFTs.`}</Text>
        <Column className="2xl:mb-[201px] 2xl:mt-[105px] 3xl:mb-[242px] 3xl:mt-[126px] items-center lg:mb-[156px] lg:mt-[82px] mb-[168px] mt-[88px] self-stretch w-[100%] xl:mb-[179px] xl:mt-[93px]">
          <Column className="items-center justify-start self-stretch w-[100%]">
            <Row className="2xl:gap-[28px] 2xl:px-[132px] 3xl:gap-[34px] 3xl:px-[158px] gap-[24px] grid grid-cols-3 items-center justify-start lg:gap-[22px] lg:px-[102px] px-[110px] self-stretch w-[100%] xl:gap-[25px] xl:px-[117px]">
              <Column className="bg-gray_50 font-inter items-center justify-center rounded-radius20 w-[100%]">
                <Image
                  src="img_vector_6.svg"
                  className="2xl:h-[43px] 2xl:mt-[63px] 3xl:h-[51px] 3xl:mt-[76px] h-[35px] lg:h-[33px] lg:mt-[49px] mt-[53px] mx-[auto] object-contain w-[15%] xl:h-[38px] xl:mt-[56px]"
                  alt="Vector"
                />
                <Text className="2xl:mb-[64px] 2xl:mt-[36px] 2xl:text-fs16 3xl:mb-[77px] 3xl:mt-[43px] 3xl:text-fs20 font-normal lg:mb-[49px] lg:mt-[28px] lg:text-fs13 mb-[53.5px] mt-[30.5px] mx-[auto] text-center text-fs14 text-gray_902 xl:mb-[57px] xl:mt-[32px]">{`Discord`}</Text>
              </Column>
              <Column className="bg-gray_50 font-inter items-center justify-center rounded-radius20 w-[100%]">
                <Image
                  src="img_vector_7.svg"
                  className="2xl:h-[40px] 2xl:mt-[64px] 3xl:h-[47px] 3xl:mt-[77px] h-[32.49px] lg:h-[31px] lg:mt-[50px] mt-[54px] mx-[auto] object-contain w-[13%] xl:h-[35px] xl:mt-[57px]"
                  alt="Vector"
                />
                <Text className="2xl:mb-[64px] 2xl:mt-[38px] 2xl:text-fs16 3xl:mb-[77px] 3xl:mt-[45px] 3xl:text-fs20 font-normal lg:mb-[50px] lg:mt-[29px] lg:text-fs13 mb-[53.76001px] mt-[31.75px] mx-[auto] text-center text-fs14 text-gray_902 xl:mb-[57px] xl:mt-[33px]">{`Twitter`}</Text>
              </Column>
              <Column className="bg-gray_50 font-inter items-center justify-center rounded-radius20 w-[100%]">
                <Image
                  src="img_vector_8.svg"
                  className="2xl:h-[46px] 2xl:mt-[62px] 3xl:h-[55px] 3xl:mt-[74px] h-[37.78px] lg:h-[36px] lg:mt-[48px] mt-[52px] mx-[auto] object-contain w-[13%] xl:h-[41px] xl:mt-[55px]"
                  alt="Vector"
                />
                <Text className="2xl:mb-[63px] 2xl:mt-[35px] 2xl:text-fs16 3xl:mb-[75px] 3xl:mt-[42px] 3xl:text-fs20 font-normal lg:mb-[49px] lg:mt-[27px] lg:text-fs13 mb-[52.620117px] mt-[29.599854px] mx-[auto] text-center text-fs14 text-gray_902 xl:mb-[56px] xl:mt-[31px]">{`Instagram`}</Text>
              </Column>
            </Row>
            <Row className="2xl:gap-[28px] 2xl:mt-[28px] 2xl:px-[132px] 3xl:gap-[34px] 3xl:mt-[34px] 3xl:px-[158px] gap-[24px] grid grid-cols-3 items-center justify-start lg:gap-[22px] lg:mt-[22px] lg:px-[102px] mt-[24px] px-[110px] self-stretch w-[100%] xl:gap-[25px] xl:mt-[25px] xl:px-[117px]">
              <Column className="bg-gray_50 font-inter items-center justify-center rounded-radius20 w-[100%]">
                <Image
                  src="img_vector_8.svg"
                  className="2xl:h-[46px] 2xl:mt-[62px] 3xl:h-[55px] 3xl:mt-[74px] h-[37.78px] lg:h-[36px] lg:mt-[48px] mt-[52px] mx-[auto] object-contain w-[13%] xl:h-[41px] xl:mt-[55px]"
                  alt="Vector"
                />
                <Text className="2xl:mb-[24px] 2xl:ml-[160px] 2xl:mr-[158px] 2xl:mt-[35px] 2xl:text-fs16 3xl:mb-[28px] 3xl:ml-[193px] 3xl:mr-[190px] 3xl:mt-[42px] 3xl:text-fs20 font-normal lg:mb-[18px] lg:ml-[125px] lg:mr-[123px] lg:mt-[27px] lg:text-fs13 mb-[20px] ml-[134px] mr-[132px] mt-[29.599854px] text-center text-fs14 text-gray_902 xl:mb-[21px] xl:ml-[143px] xl:mr-[140px] xl:mt-[31px]">{`Github`}</Text>
              </Column>
              <Column className="bg-gray_50 font-inter items-center justify-center rounded-radius20 w-[100%]">
                <Image
                  src="img_articlesicon.svg"
                  className="2xl:h-[53px] 2xl:mt-[52px] 3xl:h-[64px] 3xl:mt-[63px] h-[44px] lg:h-[42px] lg:mt-[41px] mt-[44px] mx-[auto] object-contain w-[11%] xl:h-[47px] xl:mt-[46px]"
                  alt="Articlesicon"
                />
                <Text className="2xl:mb-[64px] 2xl:mt-[36px] 2xl:text-fs16 3xl:mb-[77px] 3xl:mt-[43px] 3xl:text-fs20 font-normal lg:mb-[49px] lg:mt-[28px] lg:text-fs13 mb-[53.5px] mt-[30.5px] mx-[auto] text-center text-fs14 text-gray_902 xl:mb-[57px] xl:mt-[32px]">{`Articles on Moonlight`}</Text>
              </Column>
              <Column className="bg-gray_50 font-inter items-center justify-center rounded-radius20 w-[100%]">
                <Image
                  src="img_teamicon.svg"
                  className="2xl:h-[53px] 2xl:mt-[52px] 3xl:h-[64px] 3xl:mt-[63px] h-[44px] lg:h-[42px] lg:mt-[41px] mt-[44px] mx-[auto] object-contain w-[16%] xl:h-[47px] xl:mt-[46px]"
                  alt="Teamicon"
                />
                <Text className="2xl:mb-[64px] 2xl:mt-[36px] 2xl:text-fs16 3xl:mb-[77px] 3xl:mt-[43px] 3xl:text-fs20 font-normal lg:mb-[49px] lg:mt-[28px] lg:text-fs13 mb-[53.5px] mt-[30.5px] mx-[auto] text-center text-fs14 text-gray_902 xl:mb-[57px] xl:mt-[32px]">{`The team`}</Text>
              </Column>
            </Row>
          </Column>
        </Column>
      </Column>
      <footer className="2xl:mb-[6px] 2xl:mt-[16px] 3xl:mb-[7px] 3xl:mt-[20px] lg:mb-[4px] lg:mt-[13px] mb-[5px] mt-[14px] self-stretch w-[100%]">
        <Column className="items-center justify-start self-stretch w-[100%]">
          <Line className="bg-deep_purple_A400 h-[2px] self-stretch w-[100%]" />
          <Row className="bg-gray_903 font-inter justify-evenly px-[0] self-stretch w-[100%]">
            <Row className="2xl:mb-[44px] 2xl:mt-[49px] 3xl:mb-[53px] 3xl:mt-[59px] items-center justify-start lg:mb-[34px] lg:mt-[38px] mb-[37px] mt-[41px] w-[33%] xl:mb-[39px] xl:mt-[43px]">
              <Text className="2xl:ml-[60px] 2xl:text-fs16 3xl:ml-[72px] 3xl:text-fs20 font-normal lg:ml-[46px] lg:text-fs13 ml-[50px] text-fs14 text-left text-white_A700 xl:ml-[53px]">{`Careers`}</Text>
              <Text className="2xl:ml-[19px] 2xl:text-fs16 3xl:ml-[23px] 3xl:text-fs20 font-normal lg:ml-[14px] lg:text-fs13 ml-[16px] text-fs14 text-left text-white_A700 xl:ml-[17px]">{`Cookies`}</Text>
              <Text className="2xl:ml-[19px] 2xl:text-fs16 3xl:ml-[23px] 3xl:text-fs20 font-normal lg:ml-[14px] lg:text-fs13 ml-[16px] text-fs14 text-left text-white_A700 xl:ml-[17px]">{`Disclaimer`}</Text>
              <Text className="2xl:ml-[19px] 2xl:text-fs16 3xl:ml-[23px] 3xl:text-fs20 font-normal lg:ml-[14px] lg:text-fs13 ml-[16px] text-fs14 text-left text-white_A700 xl:ml-[17px]">{`Terms`}</Text>
              <Text className="2xl:ml-[19px] 2xl:text-fs16 3xl:ml-[23px] 3xl:text-fs20 font-normal lg:ml-[14px] lg:text-fs13 ml-[16px] text-fs14 text-left text-white_A700 xl:ml-[17px]">{`Privacy`}</Text>
            </Row>
            <Text className="2xl:mb-[44px] 2xl:mt-[49px] 2xl:text-fs16 3xl:mb-[53px] 3xl:mt-[59px] 3xl:text-fs20 font-normal lg:mb-[34px] lg:mt-[38px] lg:text-fs13 mb-[37px] mt-[41px] text-center text-fs14 text-white_A700 xl:mb-[39px] xl:mt-[43px]">{`Copyright © 2022 getmoonlight.io. All rights reserved.`}</Text>
            <Image
              src="img_socialmediaic.svg"
              className="2xl:h-[22px] 2xl:mb-[49px] 2xl:mt-[46px] 3xl:h-[26px] 3xl:mb-[59px] 3xl:mt-[56px] h-[18px] lg:h-[17px] lg:mb-[38px] lg:mt-[36px] mb-[41px] mt-[39px] object-contain w-[9%] xl:h-[20px] xl:mb-[43px] xl:mt-[41px]"
              alt="SocialMediaIc"
            />
          </Row>
        </Column>
      </footer>
    </Column>
  );
};

export default FramePage;
