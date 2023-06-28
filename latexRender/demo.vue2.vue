<template>
  <latex-div>{{ json.questionBody }}</latex-div>
  <div v-for="sub in json.questionSubList" :key="sub.questionSubInternalId">
    <latex-div>{{ `${sub.questionSubNo}.${sub.subQuestionBody}` }}</latex-div>
  </div>

  <latex-div>{{ content }}</latex-div>
</template>
<script>
import { latexRender } from './latex.es'
import './style.css'

export default {
  data: function () {
    return {
      content:
        '\\because抛物线y=-\\frac{1}{2}x^{2}向上平移2个单位长度,再向右平移1个单位长度得到的抛物线是y=-\\frac{1}{2}(x-1)^{2}+2,\n\\thereforea=-\\frac{1}{2},h=-1,k=2.',
      json: {
        questionBody: '8.根据下列要求画图\\blank{\\_{15}}{1/3/L},\\blank{\\_{15}}{2/3/L},\\blank{\\_{150}}{3/3/L}.',
        questionId: 57797,
        questionImageList: [
          {
            fileWidth: 321,
            imgUrl:
              'http://homework-test0.oss-cn-beijing.aliyuncs.com/2667180380729950pic.jpg?Expires=1685176762&amp;OSSAccessKeyId=LTAI4Fgkj6vVSgC8hjWC5KVN&amp;Signature=17Yaa2oPrM52Hwh32n7g%2BI1szHY%3D',
          },
        ],
        questionNo: '8',
        questionSubList: [
          {
            answerAreaHeight: 12,
            optionList: [],
            questionSubImageList: [
              {
                fileWidth: 670,
                imgUrl:
                  'https://homework-test0.oss-cn-beijing.aliyuncs.com/17425010537124033pic.jpg?Expires=1685176762&amp;OSSAccessKeyId=LTAI4Fgkj6vVSgC8hjWC5KVN&amp;Signature=fNYKMUfJSXjTgsXUh4dcIxvEthM%3D',
              },
            ],
            questionSubInternalId: 10,
            questionSubNo: '1',
            subQuestionBody: '(1)如图1所示,过点A画MN\\parallelBC,\\blank{\\_{15}}{1/2/L};',
          },
          {
            answerAreaHeight: 12,
            optionList: [],
            questionSubImageList: [
              {
                fileWidth: 670,
                imgUrl:
                  'https://homework-test0.oss-cn-beijing.aliyuncs.com/17425010649307408pic.jpg?Expires=1685176762&amp;OSSAccessKeyId=LTAI4Fgkj6vVSgC8hjWC5KVN&amp;Signature=xC6XXj8WVnOUl89VOVks5SXfo0k%3D',
              },
            ],
            questionSubInternalId: 11,
            questionSubNo: '2',
            subQuestionBody: '(2)如图2所示,过点P画PE\\parallelOA,交OB于点E,过点P画PH\\parallelOB,交OA于点H\\blank{\\_{15}}{2/2/L};',
          },
          {
            answerAreaHeight: 12,
            optionList: [],
            questionSubImageList: [
              {
                fileWidth: 670,
                imgUrl:
                  'https://homework-test0.oss-cn-beijing.aliyuncs.com/17425010774118661pic.jpg?Expires=1685176762&amp;OSSAccessKeyId=LTAI4Fgkj6vVSgC8hjWC5KVN&amp;Signature=KbtVMf7Opk21YZrJksyZGHjggx8%3D',
              },
            ],
            questionSubInternalId: 12,
            questionSubNo: '3',
            subQuestionBody: '(3)如图3所示,过点C画CE\\parallelDA,与AB交于点E,过点C画CF\\parallelDB,与AB的延长线交于点F\\blank{\\_{15}}{3/2/L}.',
          },
        ],
      },
    }
  },
  mounted() {
    console.log('render start')
    latexRender({
      textColor: '#666',
      lineHeight: '36px',
    }).then(() => {
      console.log('render over')
    })
  },
}
</script>
<style scoped lang="scss"></style>
