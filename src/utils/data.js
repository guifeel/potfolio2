import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "抖音直播培训",
    projects: "培训 20+   直播讲师",
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "教育培训",
    projects: "辅导 300+ 学员",
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "学前班级",
    projects: "经管 6+ 班级",
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "多年来学习和教育工作，让我怀着一颗育人的心不断前行！",
  "在这些经历中，我积累了丰富的工作经验，涵盖了益智幼儿教育、传统K12教育以及新型抖音、快手直播教育领域。我经历了从教务工作到讲师和直播工作的蜕变，逐渐深入了解了教育领域并熟悉了各项流程。",
  "同时，我熟练运用 Photoshop、Canva和 PR 等工具进行图片处理、海报设计和宣传视频剪辑，利用以往的积淀完成 PPT 的课程设计和宣传设计，使培训和教育更加得心应手。",
];

export const workExp = [
  {
    place: "好好学教育科技有限公司",
    tenure: "2022.06-至今",
    role: "直播讲师培训师",
    detail:
      "成人 Excel 技能培训的课程设计，宣传物料设计。指导新入职讲师的培训，帮助他们进行从0到1的全面提升；包括仪容仪表指导、课程授课内容指导。负责培训日程的安排，培训物料的研发工作。负责不同讲师抖音号策划、运营和内容设计等相关事务。",
  },
  {
    place: "北京中公教育科技有限公司 ",
    tenure: "2021.01-2022.06",
    role: "教研讲师",
    detail:
      "研发和审核各个学校专升本考试相关的讲义和试题，确保准确度和及时更新。 根据不同学校的考试大纲，开发所需的教育教材；以及审核和修订讲义。 招聘考试的审核，新晋员工的培训。 教师资格证真题的创作和新题录入。 相关课程宣传、部分课程的课程设计以及讲师工作。",
  },
  {
    place: "北京博乐益智教育科技有限公司",
    tenure: "2020.09-2020.12",
    role: "教师",
    detail:
      "提升不同年龄段幼儿的心智发展水平的公司。我在工作期间，独立指导了一支由10名学员组成的班级，负责学习指导、Scratch 儿童编程、乐高等级考试的辅导。设计属于自己风格的全脑思维课程并确保其流程的顺畅，以及提供相关知识的指导。培养孩子们的个人能力，引导他们理解搭建结构等知识，并进行左右脑协调拓展的思维训练。",
  },
];

export const comments = [
  {
    name: "王健林",
    post: "作家",
    comment: "她总是先定一个小目标，先出个1亿道题！",
    img: "./people2.png",
  },
  {
    name: "鲁迅",
    post: "Creative Manager",
    comment: "她是引导学生迈向未来的向导,是指引学生拓展智慧的良师益友。",
    img: "./people1.jpg",
  },
  {
    name: "孔子",
    post: "Creative Manager",
    comment: "君子敬而无失，与人恭而有礼，居处恭，执事敬",
    img: "./people3.png",
  },
  {
    name: "乐高",
    post: "Creative Manager",
    comment:
      "老师讲课十分认真投入，内容纲举目分，条理性很强，而且特别善于举例，让同学理论联系实际，学习起来十分轻松，而且印象深刻，收到良好的效果。老师为人和蔼，课堂能与同学们互动，营造温馨的课堂气氛。",
    img: "./lego.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
