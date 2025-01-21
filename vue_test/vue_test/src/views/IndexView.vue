<template>
    <div class="index">
        <br/>
        <br/>
        <div class="showBox">
            <!-- <div class="borderBox left_top"></div>
            <div class="borderBox right_top"></div>
            <div class="borderBox left_bottom"></div>
            <div class="borderBox right_bottom"></div> -->
            <img src="images/uto_ed.jpg" class="uto_img" />
        </div>
        <br/>
        <br/>
        <div class="inward-rounded-div">
            <p>內凹圖形繪製</p>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.index {
    background-color: aqua;
}
.inward-rounded-div {
    width: 300px;
    height: 300px;
    left: 20px;
    background-color: #F00;
    position: relative;
    // border: 4px dashed black;
    outline-style: double;
    outline-color: aqua;
    outline-width: 4px;
    --mask: radial-gradient(40px at 40px 40px,#0000 98%,#000) -40px -40px;
    -webkit-mask: var(--mask);
            mask: var(--mask);

    p {
        text-align: center;
        padding-top: 120px;
        font-size: 16px;
    }
}

.showBox{
    margin-top: 100px;
    margin-left: 100px;
    width: 1220px;
    height: 695px;
    position: relative;
    --mask:
        radial-gradient(40px at 40px 40px,#0000 calc(98% - 1px),#000 calc(100% - 1px) 98%,#0000) -40px -40px,
        linear-gradient(90deg,#000 2px,#0000 0) -1px 50% /100% calc(100% - 80px + 1px) repeat-x,
        linear-gradient(      #000 2px,#0000 0) 50% -1px/calc(100% - 80px + 1px) 100% repeat-y;
}

.showBox:before{
    content: "";
    position: absolute;
    inset: 0;
    background: red;
    -webkit-mask: var(--mask);
            mask: var(--mask);
}

.borderBox{
    position: absolute;
    width: 50px;
    height: 50px;
    border: 1px solid white;
    background-color: white;
    z-index: 1;
}

.left_top{
    top: -1px;
    left: -1px;
    border-radius: 0px 0px 50px 0px;
    border-bottom: 1px solid red;
    border-right: 1px solid red;
}

.right_top{
    top: -1px;
    right: -1px;
    border-radius: 0px 0px 0px 50px;
    border-bottom: 1px solid red;
    border-left: 1px solid red;
}

.left_bottom{
    bottom: -1px;
    left: -1px;
    border-radius: 0px 50px 0px 0px;
    border-top: 1px solid red;
    border-right: 1px solid red;
}

.right_bottom{
    right: -1px;
    bottom: -1px;
    border-radius: 50px 0px 0px 0px;
    border-top: 1px solid red;
    border-left: 1px solid red;
}

.uto_img{
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    // width: 1180px;
    // height: 655px;
    width: 1200px;
    height: 675px;
    --mask: radial-gradient(40px at 40px 40px,#0000 98%,#000) -40px -40px;
    -webkit-mask: var(--mask);
            mask: var(--mask);
}

</style>