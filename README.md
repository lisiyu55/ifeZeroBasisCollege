# 三种简历的制作

## 第一种简历
   flex布局设置父级元素布局方式以及子项目在主轴方向排列方式，使二级标题后的信息水平排列，设置flex属性值定义子项目的缩放、占据位置。
```css 
.info-contact{
    display: flex;
    justify-content: flex-start;
}
.info-contact p{
    flex:0 1 250px;
}
```
## 第二种简历
  设置main标签display：flex将简历分成左右两栏布局，对于右栏处理方式与第一种类似
```css
main{
    margin: 0 auto;
    width: 75%;
    display: flex;
}
.left{
    background-color: rgb(101,165,250);
    flex: 0 1 200px;
}
.right{
    padding-left: 20px;
    flex: 0 1 800px;
}
.info-contact{
    display: flex;
    justify-content: flex-start;
}
.info-contact p{
    flex:0 1 250px;
    font-size: 20px;
}
```
## 第三种简历
   将二级标题正常显示，子元素通过绝对定位放置
```css
.col{
    width: 100%;
    border: 1px solid rgb(211, 208, 208);
    height: 110px;
    position: relative;
}
h2{
    height: 110px;
    width: 110px;
    background-color: rgb(201, 197, 197);
    font-size: 20px; 
    line-height: 110px;
    text-align: center;
}
p{
    display: inline-block;
    margin-right: 50px;  
}
.info-contact,.row-second{
    position: absolute;
    top:10px;
    left: 110px;    
}
```
