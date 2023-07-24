<template>
    <div class="BlogContainer">
        <div class="sidebar">
            <div>地区</div>
            <div>职务</div>
            <div class="changeMode" @click="changeMode">切换</div>
        </div>
        <div class="CardList">
            <div :class="cardState" v-for="item in bloglists" :style="{width: cardWidth + 'px',height: cardHeight + 'px'}"  draggable="true" 
            @dragstart="dragStart(item.id)" @dragenter="dragenter($event, item.id)" @dragover="dragmove($event, item.id)">
                <div class="card_content">
                    <span >{{item.title}}</span>
                </div>
                <div class="card_drag" >
                    <svg><path d="M80 120 Q 150 30 220 120 l 0 -40" fill="none" style="stroke: #f00;stroke-width:3px"></path></svg>
                    <svg><path d="M220 0 Q 150 90 80 0 l 0 40" fill="none" style="stroke: #f00;stroke-width:3px"></path></svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import userinfo from "@/components/BlogList/UserInfo.vue"
import blogs from "@/components/BlogList/BlogContent.vue"
import dialogs from "@/components/Utils/Dialog.vue"
import page from '@/components/Utils/Page.vue'
import { reactive, ref } from "@vue/reactivity"
import { nextTick, onMounted, watchEffect } from "@vue/runtime-core"
    // 常用变量
    const cardState = ref('draw')
    const cardWidth = ref(300)
    const cardHeight = ref(300)
    const dragIndex = ref(0)
    // 列表
    const bloglists = reactive([
        {id : 1,"title": "列表1" , "content" : "小戎俴收，五楘梁辀。游环胁驱，阴靷鋈续。文茵畅毂，驾我骐馵。言念君子，温其如玉。在其板屋，乱我心曲。四牡孔阜，六辔在手。骐骝是中，騧骊是骖。龙盾之合，鋈以觼軜。言念君子，温其在邑。方何为期？胡然我念之。俴驷孔群，厹矛鋈錞。蒙伐有苑，虎韔镂膺。交韔二弓，竹闭绲滕。言念君子，载寝载兴。厌厌良人，秩秩德音。", "timedate" : "2021-11-16 20:37"},
        {id : 2,"title": "列表2" , "content" : "春游浩荡，是年年寒食，梨花时节。白锦无纹香烂漫，玉树琼苞堆雪。静夜沉沉，浮光霭霭，冷浸溶溶月。人间天上，烂银霞照通彻。浑似姑射真人，天姿灵秀，意气舒高洁。万蕊参差谁信道，不与群芳同列。浩气清英，仙材卓荦，下土难分别。瑶台归去，洞天方看清绝。", "timedate" : "2021-11-16 20:37"},
        {id : 3,"title": "列表3" , "content" : "清夜无尘，月色如银。酒斟时、须满十分。浮名浮利，虚苦劳神。叹隙中驹，石中火，梦中身。虽抱文章，开口谁亲。且陶陶、乐尽天真。几时归去，作个闲人。对一张琴，一壶酒，一溪云。", "timedate" : "2021-11-16 20:37"},
        {id : 4,"title": "列表4" , "content" : "凤凰台上凤凰游，凤去台空江自流。吴宫花草埋幽径，晋代衣冠成古丘。三山半落青天外，二水中分白鹭洲。总为浮云能蔽日，长安不见使人愁。", "timedate" : "2021-11-16 20:37"},
        {id : 5,"title": "列表5" , "content" : "青天有月来几时？我今停杯一问之。人攀明月不可得，月行却与人相随。皎如飞镜临丹阙，绿烟灭尽清辉发。但见宵从海上来，宁知晓向云间没。白兔捣药秋复春，嫦娥孤栖与谁邻？今人不见古时月，今月曾经照古人。古人今人若流水，共看明月皆如此。唯愿当歌对酒时，月光长照金樽里。", "timedate" : "2021-11-16 20:37"},
        {id : 6,"title": "列表6" , "content" : "风卷江湖雨暗村，四山声作海涛翻。溪柴火软蛮毡暖，我与狸奴不出门。僵卧孤村不自哀，尚思为国戍轮台。夜阑卧听风吹雨，铁马冰河入梦来。", "timedate" : "2021-11-16 20:37"},
        {id : 7,"title": "列表7" , "content" : "蒲池村里悤悤别，沣水桥边兀兀回。行到城门残酒醒，万重离恨一时来。", "timedate" : "2021-11-16 20:37"},
        {id : 8,"title": "列表8" , "content" : "井底引银瓶，银瓶欲上丝绳绝。石上磨玉簪，玉簪欲成中央折。瓶沉簪折知奈何？似妾今朝与君别。忆昔在家为女时，人言举动有殊姿。婵娟两鬓秋蝉翼，宛转双蛾远山色。笑随戏伴后园中，此时与君未相识。妾弄青梅凭短墙，君骑白马傍垂杨。墙头马上遥相顾，一见知君即断肠。知君断肠共君语，君指南山松柏树。感君松柏化为心，暗合双鬟逐君去。到君家舍五六年，君家大人频有言。聘则为妻奔是妾，不堪主祀奉蘋蘩。终知君家不可住，其奈出门无去处。岂无父母在高堂？亦有亲情满故乡。潜来更不通消息，今日悲羞归不得。为君一日恩，误妾百年身。寄言痴小人家女，慎勿将身轻许人！", "timedate" : "2021-11-16 20:37"},
        {id : 9,"title": "列表9" , "content" : "别来春半，触目柔肠断。砌下落梅如雪乱，拂了一身还满。雁来音信无凭，路遥归梦难成。离恨恰如春草，更行更远还生。", "timedate" : "2021-11-16 20:37"},
    ])

    // 绑定拉伸效果
    const draw = function(){
        cardState.value = 'draw'
        nextTick(()=>{
            const card = document.getElementsByClassName("draw")
            for(var i= 0; i< card.length; i++){
                // 点击阶段
                card[i].addEventListener('mousedown', mousedown)
            }
        })
    }
    // 解绑拉伸效果
    const undraw = function(){
        cardState.value = 'drag'
        nextTick(()=>{
            const card = document.getElementsByClassName("drag")
            for(var i= 0; i< card.length; i++){
                // 点击阶段
                card[i].removeEventListener('mousedown', mousedown)
            }
        })
    }
    // 拉伸具体实现方法
    const mousedown = function(e){
        e.toElement.style.borderColor = '#fff'
        let startX = e.clientX,startY = e.clientY, thisCard = e.toElement, lastWidth = thisCard.clientWidth, lastHeight = thisCard.clientHeight
        // 拖动阶段
        document.onmousemove = function(e){
            let endX = e.clientX, endY = e.clientY
            cardWidth.value = lastWidth + (endX - startX)
            cardWidth.value < 300 && (cardWidth.value = 300)
            cardWidth.value > 800 && (cardWidth.value = 800)

            cardHeight.value = lastHeight + (endY - startY)
            cardHeight.value < 300 && (cardHeight.value = 300)
            cardHeight.value > 800 && (cardHeight.value = 800)
            // thisCard.style.width = cardWidth + 'px'
            // thisCard.style.height = cardHeight + 'px'
        }
        document.onmouseup = function(e){
            
            thisCard.style.borderColor = '#f00'
            document.onmousemove = null
        }
    }

    // 拖拽开始
    const dragStart = function(index){
        dragIndex.value = index
    }
    // 拖拽过程
    const draging = function(){}
    // 拖拽结束
    const dragend = function(){}
    // 拖拽对象进入目标对象
    const dragenter = function(e, index){
        e.preventDefault();
        if(dragIndex.value !== index){
            // 取出源对象
            const source = bloglists[dragIndex.value-1]
            source.id = index
            // 删除源对象
            bloglists.splice(dragIndex.value - 1, 1)
            bloglists.forEach(function(v,n){
                if(dragIndex.value<index){
                    if(dragIndex.value<v.id && index>=v.id)bloglists[n].id = v.id-1
                }else{
                    if(dragIndex.value>v.id && index<=v.id)bloglists[n].id = v.id+1
                }
            })
            bloglists.splice(index-1, 0, source)
            console.log(bloglists)
            dragIndex.value = index
        }
    }
    // 拖拽对象在目标对象内移动
    const dragmove = function(e, index){
        e.preventDefault();
    }
    // 拖拽对象离开目标对象
    const dragleave = function(){}
    // 拖拽目标释放
    const drop = function(){}

    // 更改模式拉伸/拖拽
    const changeMode = function(){
        if(cardState.value == 'draw'){
            undraw()
        }else{
            draw()
        }
    }

    onMounted(()=>{
        draw()
    })

</script>

<style lang="less" scoped>

    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
    .BlogContainer {
        .sidebar{
            position: fixed;
            top: 50%;
            left: 0%;
            .changeMode{
                cursor: pointer;
            }
        }
        .CardList{
            display: flex;
            flex-wrap: wrap;
            padding: 0 3%;
            .draw{
                border: 2px red solid;
                cursor: auto;
                margin: 10px;
                pointer-events: none;
                position: relative;
                &::after{
                    content: '';
                    cursor: nw-resize;
                    height: 12px;
                    width: 12px;
                    position: absolute;
                    background: blue;
                    top: calc(100% - 12px);
                    left: calc(100% - 12px);
                    clip-path: polygon(0 100%, 100% 100%, 100% 0);
                    pointer-events: auto;
                }
                .card_drag{
                    display: none;
                }
            }
            .drag{
                border: 2px red solid;
                cursor: pointer;
                margin: 10px;
            }
        }
    }
</style>