/*
 * 主要关系链
*/
export default {
    '':['自己','我','俺','吾','本人','在下'],
    // 主线
    'f,f,f,f,f,f,f,f,f,f,f,f':['先祖父','先太爷','十二世祖'],
    'f,f,f,f,f,f,f,f,f,f,f,m':['先祖母','先太奶'],
    'f,f,f,f,f,f,f,f,f,f,f':['始祖父','始太爷','十一世祖'],
    'f,f,f,f,f,f,f,f,f,f,m':['始祖母','始太奶'],
    'f,f,f,f,f,f,f,f,f,f':['开祖父','开太爷','十世祖'],
    'f,f,f,f,f,f,f,f,f,m':['开祖母','开太奶'],
    'f,f,f,f,f,f,f,f,f':['鼻祖父','鼻太爷','九世祖'],
    'f,f,f,f,f,f,f,f,m':['鼻祖母','鼻太奶'],
    'f,f,f,f,f,f,f,f':['远祖父','远太爷','八世祖'],
    'f,f,f,f,f,f,f,m':['远祖母','远太奶'],
    'f,f,f,f,f,f,f':['太祖父','太太爷','七世祖'],
    'f,f,f,f,f,f,m':['太祖母','太太奶'],
    'f,f,f,f,f,f':['烈祖父','烈太爷','六世祖'],
    'f,f,f,f,f,m':['烈祖母','烈太奶'],
    'f,f,f,f,f':['天祖父','天太爷','五世祖'],
    'f,f,f,f,m':['天祖母','天太奶'],
    // 高祖辈
    'f,f,f,f':['高祖父','外曾外曾外毑父','曾曾祖父','祖太公','祖太爷','高太爷','祖太翁','祖太爷爷','四世祖'],
    'f,f,f,m':['高祖母','外曾外曾外毑母','曾曾祖母','祖太婆','祖太奶','高太奶','祖太姆','祖太奶奶'],
    'f,f,m,f':['高外祖父','外曾外曾毑父'],
    'f,f,m,m':['高外祖母','外曾外曾毑母'],
    'f,m,f,f':['曾外曾祖父','外高外毑父'],
    'f,m,f,m':['曾外曾祖母','外高外毑母'],
    'f,m,m,f':['曾外曾外祖父','外高毑父'],
    'f,m,m,m':['曾外曾外祖母','外高毑母'],
    'm,f,f,f':['外高祖父','曾外曾外毑父'],
    'm,f,f,m':['外高祖母','曾外曾外毑母'],
    'm,f,m,f':['外高外祖父','曾外曾祖毑父'],
    'm,f,m,m':['外高外祖母','曾外曾祖毑母'],
    'm,m,f,f':['外曾外曾祖父','高外毑父'],
    'm,m,f,m':['外曾外曾祖母','高外毑母'],
    'm,m,m,f':['外曾外曾外祖父','高毑父'],
    'm,m,m,m':['外曾外曾外祖母','高毑母'],
    // 曾祖辈
    'f,f,f':['曾祖父','曾祖','外曾外毑父','太公','太爷','老太爷','太翁','太爷爷','曾爷爷','公太','佬嗲','祖爷','三世祖'],
    'f,f,m':['曾祖母','外曾外毑母','太婆','太奶','老太奶','太嬷','太姆','太奶奶','曾奶奶','婆太','老娭毑'],
    'f,m,f':['曾外祖父','曾外祖','外曾毑父','太外公','太外爷','太外翁','太外爷爷'],
    'f,m,m':['曾外祖母','外曾毑母','太外婆','太外奶','太外嬷','太外姆','太外奶奶'],
    'm,f,f':['外曾祖父','外曾祖','曾外毑父','外太公','外太爷','外太翁','外太爷爷'],
    'm,f,m':['外曾祖母','曾外毑母','外太婆','外太奶','外太嬷','外太姆','外太奶奶'],
    'm,m,f':['外曾外祖父','外曾外祖','曾毑父','外太外公','外太外爷','外太外翁','外太外爷爷','外太姥爷'],
    'm,m,m':['外曾外祖母','曾毑母','外太外婆','外太外奶','外太外嬷','外太外姆','外太外奶奶','外太姥姥'],
    // 祖父辈
    'f,f':['爷爷','祖父','奶爷','奶爹','阿爷','阿公','亚爷','亚公','依爷','嗲嗲','大父','爷','爷儿','爷老','爷老子','爷老倌','二世祖'],
    'f,m':['奶奶','祖母','阿奶','奶娘','阿姆','阿婆','亚嬷','亚婆','依奶','阿嬷','大母','奶','嫲嫲','婻婻','娭毑','嗯奶','娘姆','媪婆','亲婆'],
    'm,f':['外公','外祖父','姥爷','阿公','外爷','客公','毑父','毑公','姥公','舅家爷','嘎公','嘎爹',,'嘎嘎爹','嘎爷爷','尕公','毑爹','毑爷','外大父','姥爹','魏公','魏爷'],
    'm,m':['外婆','外祖母','姥姥','阿婆','外奶','客婆','毑母','毑婆','姥婆','舅家婆','嘎嘎','嘎婆','嘎嘎婆','嘎奶奶','尕婆','毑娘','毑毑','外大母','姥娘','魏婆','魏奶','阿嬷','外嬷','嫲嫲','好婆','嫏嫏','嫏娘'],
    'f,f,ob':['伯公','伯祖','伯翁','大爷爷','大嗲','大爷','大公','大阿爷'],
    'f,f,ob,w':['伯婆','姆婆','大奶奶','伯娭毑'],
    'f,f,lb':['叔公','叔祖','叔翁','小爷爷','晚公','幺爷','细嗲'],
    'f,f,lb,w':['叔婆','婶婆','小奶奶','叔娭毑','晚婆','幺奶'],
    'f,f,xb':['伯叔祖父','从祖父','几爷爷','几大爷','几嗲','几爷','几公'],
    'f,f,xb,w':['伯叔祖母','从祖母','几奶奶','几大娘','几奶','几婆'],
    'f,f,xs':['姑奶奶','祖姑','姑奶','恩婆','姑娭毑'],
    'f,f,xs,h':['姑爷爷','祖姑丈','恩爹','姑丈公','丈公'],
    'f,m,xb':['舅爷爷','舅祖','舅爹','太舅父'],
    'f,m,xb,w':['舅奶奶','妗婆','舅婆','妗奶','太舅母'],
    'f,m,xs':['姨奶奶','姨奶','姨娭毑'],
    'f,m,xs,h':['姨爷爷','姨公公','姨爹','姨丈公','丈公'],
    'm,f,ob':['伯外公','外伯祖','伯外祖','大外公','大姥爷','大外爷'],
    'm,f,ob,w':['伯外婆','外姆婆','大外婆','大姥姥','大姥奶'],
    'm,f,lb':['叔外公','外叔祖','叔外祖','小外公','小姥爷','小外爷'],
    'm,f,lb,w':['叔外婆','外婶婆','小外婆','小姥姥','婶姥姥','小姥奶'],
    'm,f,xb':['堂外祖父','几外公','几姥爷','几外爷'],
    'm,f,xb,w':['堂外祖母','几外婆','几姥姥','几姥奶','几外奶','几姥'],
    'm,f,xs':['姑外婆','姑婆','恩婆'],
    'm,f,xs,h':['姑外公','姑公','恩爹','外姑丈公','外丈公'],
    'm,m,xb':['舅外公','舅公','舅爹'],
    'm,m,xb,w':['舅外婆','舅婆','妗姥姥','妗姥娘','妗姥','外妗婆'],
    'm,m,xs':['姨外婆','姨婆'],
    'm,m,xs,h':['姨外公','姨公','外姨丈公','外丈公'],
    // 父系
    'f':['爸爸','父亲','老父亲','老爸','阿爸','阿父','阿爹','老窦','爹地','依爹','老爹','老汉','老爷子','老子','牙老子','爸','父','爹','老汉儿','牙老倌','爸比','爹爹','爹啲','一世祖'],
    'f,ob':['伯父','伯伯','伯爸','伯爷','依伯','世父','大爹','大爸','大爸爸','伯儿','大伯','大爷','大大','阿伯','几伯','伯'],
    'f,ob,w':['伯母','伯妈','伯娘','依姆','世母','大娘','大妈','大妈妈','伯妇','大嬷','大姆妈','伯姐','姆'],
    'f,lb':['叔叔','叔父','叔爸','叔爹','阿叔','叔儿','仲父','季父','叔仔','依叔','小叔','小爹','小爸','几叔','叔'],
    'f,lb,w':['婶婶','婶母','婶妈','婶娘','阿婶','婶儿','仲母','季母','叔妇','依婶','小婶','小娘','小妈','几婶','婶','婶子','家婶','叔母','叔妈','叔娘','婶爹','嬢嬢'],
    'f,xb,s&o':['堂哥','堂老兄'],
    'f,xb,s&o,w':['堂嫂','堂兄嫂'],
    'f,xb,s&l':['堂弟','堂老弟'],
    'f,xb,s&l,w':['堂弟媳','堂弟妇','堂弟妹'],
    'f,xb,s,s':['堂侄','再从子'],
    'f,xb,s,s,w':['堂侄媳妇'],
    'f,xb,s,s,s':['堂侄孙','再从孙'],
    'f,xb,s,s,s,s':['堂曾孙','再曾孙'],
    'f,xb,s,s,s,s,s':['堂玄孙','再玄孙'],
    'f,xb,s,d':['堂侄女'],
    'f,xb,s,d,h':['堂侄女婿'],
    'f,xb,d&o':['堂姐','堂大姐'],
    'f,xb,d&o,h':['堂姐夫'],
    'f,xb,d&l':['堂妹','堂细妹'],
    'f,xb,d&l,h':['堂妹夫'],
    'f,xb,d,s':['堂外甥'],
    'f,xb,d,s,w':['堂外甥媳妇'],
    'f,xb,d,d':['堂外甥女'],
    'f,xb,d,d,h':['堂外甥女婿'],
    'f,os':['大姑','姑姊','姑嬷'],
    'f,os,h':['大姑丈','大姑夫','恩伯'],
    'f,ls':['小姑','姑姐','姑妹','姑仔','尕娘','幺姑姐','老姑'],
    'f,ls,h':['小姑丈','小姑夫','恩叔'],
    'f,xs':['姑妈','姑母','姑姑','恩妈','几姑','姑','阿姑','嬢嬢','娘娘'],
    'f,xs,h':['姑丈','姑父','姑爸','恩爸','姑伯','姑爹','姑夫','姑婿','姑郎','亘'],
    'f,f,xb,s&o':['堂伯'],
    'f,f,xb,s&o,w':['堂伯母'],
    'f,f,xb,s&l':['堂叔'],
    'f,f,xb,s&l,w':['堂婶'],
    'f,f,xb,s':['堂伯叔父','堂叔伯','从父'],
    'f,f,xb,s,w':['堂伯叔母','从母'],
    'f,f,xb,s,s&o':['从堂兄'],
    'f,f,xb,s,s&l':['从堂弟'],
    'f,f,xb,s,s,s':['从堂侄','三从子'],
    'f,f,xb,s,s,s,s':['从堂侄孙','三从孙'],
    'f,f,xb,s,s,s,s,s':['从堂侄曾孙','三曾孙'],
    'f,f,xb,s,s,s,s,s,s':['从堂侄玄孙','三玄孙'],
    'f,f,xb,d':['堂姑'],
    'f,f,xb,d,h':['堂姑丈'],
    'f,f,f,xb':['伯叔曾祖父'],
    'f,f,f,xb,w':['伯叔曾祖母'],
    'f,f,f,xb,s':['堂伯叔祖父'],
    'f,f,f,xb,s,w':['堂伯叔祖母'],
    'f,f,f,xb,s,s&o':['从伯父'],
    'f,f,f,xb,s,s&o,w':['从伯母'],
    'f,f,f,xb,s,s&l':['从叔父'],
    'f,f,f,xb,s,s&l,w':['从叔母'],
    'f,f,f,xb,s,s':['从伯叔父','再从父'],
    'f,f,f,xb,s,s,w':['从伯叔母','再从母'],
    'f,f,f,xb,s,s,s&o':['族兄'],
    'f,f,f,xb,s,s,s&l':['族弟'],
    'f,f,f,xb,s,s,s,s':['族侄','四从子','族子'],
    'f,f,f,xb,s,s,s,s,s':['族侄孙','四从孙','族孙'],
    'f,f,f,xb,s,s,s,s,s,s':['族侄曾孙','四曾孙','族曾孙'],
    'f,f,f,xb,s,s,s,s,s,s,s':['族侄玄孙','四玄孙','族玄孙'],
    'f,f,f,f,xb':['伯叔高祖父'],
    'f,f,f,f,xb,w':['伯叔高祖母'],
    'f,f,f,f,xb,s':['堂伯叔曾祖父'],
    'f,f,f,f,xb,s,w':['堂伯叔曾祖母'],
    'f,f,f,f,xb,s,s':['从伯叔祖父'],
    'f,f,f,f,xb,s,s,w':['从伯叔祖母'],
    'f,f,f,f,xb,s,s,s&o':['族伯父'],
    'f,f,f,f,xb,s,s,s&o,w':['族伯母'],
    'f,f,f,f,xb,s,s,s&l':['族叔父'],
    'f,f,f,f,xb,s,s,s&l,w':['族叔母'],
    'f,f,f,f,xb,s,s,s':['族伯叔父','三从父','族父'],
    'f,f,f,f,xb,s,s,s,w':['族伯叔母','三从母','族母'],
    //  母系
    'm':['妈妈','母亲','老母亲','老妈','阿妈','阿母','阿娘','老母','妈咪','依妈','老娘','老乸','老妈子','妈子','娘老子','妈','母','娘','阿毑','姆嬷','姆妈','娘亲'],
    'm,ob':['大舅','大舅舅','舅伯','元舅'],
    'm,ob,w':['大舅妈','大妗','舅嫲'],
    'm,lb':['小舅','小舅舅','舅仔','舅父仔','尕阿舅','老舅'],
    'm,lb,w':['小舅妈','小妗','细妗'],
    'm,xb':['舅舅','舅爸','舅父','舅爹','娘舅','母舅','阿舅','妗公','舅台','几舅','舅'],
    'm,xb,w':['舅妈','舅母','舅娘','娘妗','舅妻','舅姆','舅姆妈','舅媳妇','舅妇','舅姥','老妗','妗子','妗妗','妗妈','妗娘','妗母','阿妗','妗门','妗婆仔','妗儿妈','妗','嬢嬢'],
    'm,os':['大姨','大姨夫','姨嬷'],
    'm,os,h':['大姨丈','姨伯'],
    'm,ls':['小姨','姨仔','老姨'],
    'm,ls,h':['小姨丈','小姨夫','老姨夫','姨叔'],
    'm,xs':['姨妈','姨母','姨姨','姨娘','阿姨','几姨','姨','从母','嬢嬢'],
    'm,xs,h':['姨丈','姨父','姨爸','姨爹','姨夫','姨婿','姨郎','尹'],
    'm,f,xb,s':['堂舅'],
    'm,f,xb,s,w':['堂舅妈'],
    'm,f,xb,d':['堂姨'],
    'm,f,xb,d,h':['堂姨丈'],
    // 婆家
    'h,f,f,f':['曾祖公父','曾祖公','太公翁'],
    'h,f,f,m':['曾祖婆母','曾祖婆','太奶亲'],
    'h,f,m,f':['曾外祖公父','曾外祖公'],
    'h,f,m,m':['曾外祖婆母','曾外祖婆'],
    'h,m,f,f':['外曾祖公父','外曾祖公'],
    'h,m,f,m':['外曾祖婆母','外曾祖婆'],
    'h,m,m,f':['外曾外祖公父','外曾外祖公'],
    'h,m,m,m':['外曾外祖婆母','外曾外祖婆'],
    'h,f,f,f,ob':['伯曾祖公父','伯曾祖公','太伯翁'],
    'h,f,f,f,ob,w':['伯曾祖婆母','伯曾祖婆','太姆婆'],
    'h,f,f,f,lb':['叔曾祖公父','叔曾祖公','太叔翁'],
    'h,f,f,f,lb,w':['叔曾祖婆母','叔曾祖婆','太婶婆'],
    'h,f,f,f,xs':['姑曾祖婆母','姑曾祖婆'],
    'h,f,f,f,xs,h':['姑曾祖公父','姑曾祖婆'],
    'h,f,f':['祖公父','祖公','祖公公','祖翁','奶公父'],
    'h,f,m':['祖婆母','祖婆','祖婆婆','奶婆母'],
    'h,m,f':['外祖公父','毑公父','外祖公','外祖公公','姥公父','姥公'],
    'h,m,m':['外祖婆母','毑婆母','外祖婆','外祖婆婆','姥婆母','姥婆'],
    'h,f':['公公','公父','家公','家官','家翁','家爷','翁亲','老官','大官','老公公','老人公','大人公','公爹','老公爹','婆父','婆爹','君舅'],
    'h,m':['婆婆','婆母','家婆','家娘','姑亲','大家','老婆婆','老人婆','大人婆','婆妈','婆母娘','婆子妈','君姑'],
    'h,f,ob':['伯公父','伯公','伯翁','伯公公','伯祖','婆婆伯'],
    'h,f,ob,w':['伯婆母','伯婆','姆婆','伯婆婆','伯姆','婆婆伯姆'],
    'h,f,lb':['叔公父','叔公','叔翁','叔公公','叔祖','婆婆叔'],
    'h,f,lb,w':['叔婆母','叔婆','婶婆','婶婆婆','婶亲','婆婆婶子'],
    'h,f,xs':['姑婆母','姑婆','姑婆婆','婆婆姑'],
    'h,f,xs,h':['姑公父','姑公','姑公公','婆婆姑夫'],
    'h,m,xb':['舅公父','舅公','舅公公'],
    'h,m,xb,w':['舅婆母','舅婆','妗婆婆','舅婆婆'],
    'h,m,xs':['姨婆母','姨婆','姨婆婆'],
    'h,m,xs,h':['姨公父','姨公','姨公公'],
    'h':['老公','丈夫','先生','夫','男人','新郎','爱爷','夫亲','夫君','官人','汉子','老头子','郎君','相公','夫婿','良人','老公仔','爱人','老伴','那口子','配偶','伴侣','伉俪','卿卿'],
    'h,ob':['大伯子','大伯儿','大伯兄','伯子','伯仔','伯兄','阿伯','大伯爷','伯爷子','婿伯'],
    'h,ob,w':['大婶子','大婶儿','大叔兄妇','伯兄妇','伯嫂','伯妇','伯姆','姒妇','姒姆','大伯嫂','姆姆','大姆','大伯妇','大伯娘','姐妇','阿姆'],
    'h,lb':['小叔子','小叔儿','小叔弟','叔子','叔仔','叔弟','阿叔','叔郎','小郎'],
    'h,lb,w':['小婶子','小婶儿','小叔弟妇','叔弟妇','叔嫂','叔妇','叔姆','娣妇','娣姆','小叔妇','婶婶','小婶','小婶婶'],
    'h,xb,s':['叔侄男'],
    'h,xb,d':['叔侄女'],
    'h,os':['大姑子','大姑姐','大姑儿','大姑娘','姑姊','婆姐','婆婆姐','大娘姑'],
    'h,os,h':['大姑夫','大姑姐夫','大亘子','婆姐夫','婆婆姐夫'],
    'h,ls':['小姑子','小姑妹','小姑儿','小姑娘','姑妹','婆妹','婆婆妹'],
    'h,ls,h':['小姑夫','小姑妹夫','小亘子','婆妹夫','婆婆妹夫'],
    'h,xs':['姑子','夫姑'],
    'h,xs,h':['姑夫','姑郎'],
    'h,xs,s':['姑甥'],
    'h,xs,d':['姑甥女'],
    // 岳家
    'w,f,f,f':['曾祖岳父','曾祖丈人','太爷丈人','祖爷丈人'],
    'w,f,f,m':['曾祖岳母','曾祖丈母','曾祖丈母娘','祖奶丈母娘','太奶丈母娘'],
    'w,f,m,f':['曾外祖岳父','曾外祖丈人','祖姥爷丈人','太姥爷丈'],
    'w,f,m,m':['曾外祖岳母','曾外祖丈母','曾外祖丈母娘','祖姥丈母娘','太姥丈母娘'],
    'w,m,f,f':['外曾祖岳父','外曾祖丈人','祖奶爷丈人','太奶爷丈人','祖姥爷丈人','太姥爷丈人'],
    'w,m,f,m':['外曾祖岳母','外曾祖丈母','太奶丈母娘','祖姥丈母娘','太姥丈母娘'],
    'w,m,m,f':['外曾外祖岳父','外曾外祖丈人','祖姥爷丈人','太姥爷丈人'],
    'w,m,m,m':['外曾外祖岳母','外曾外祖丈母','外曾外祖丈母娘','祖姥丈母娘','太姥丈母娘'],
    'w,f,f':['祖岳父','太岳父','奶岳父','祖丈人','爷丈人','奶爷丈人','奶丈爷','奶丈人','老丈爷'],
    'w,f,m':['祖岳母','太岳母','奶岳母','祖丈母','祖丈母娘','奶丈母娘','奶丈姥','奶丈母','老丈姥'],
    'w,f,ob':['伯岳父'],
    'w,f,ob,w':['伯岳母'],
    'w,f,lb':['叔岳父'],
    'w,f,lb,w':['叔岳母'],
    'w,f,f,xb,s&o':['姻伯丈'],
    'w,f,f,xb,s&o,w':['姻姆'],
    'w,f,f,xb,s&l':['姻叔丈'],
    'w,f,f,xb,s&l,w':['姻婶'],
    'w,m,f':['外祖岳父','毑岳父','外祖丈人爹','外祖丈人','外太岳父','姥岳父','姥丈爷','姥丈人','姥丈人爹','老丈爷','姥爷丈人'],
    'w,m,m':['外祖岳母','毑岳母','外祖丈母娘','外祖丈母','外太岳母','姥岳母','姥丈姥','姥丈母','姥丈母娘','老丈娘'],
    'w,f':['岳父','丈人','老丈人','外父','泰山','外舅','老亲爷','丈人爹','老干爷','丈人公','丈母爷','丈爷','丈爷爹','丈父','岳老子','老丈杆子','岳丈','岳翁','妻公','妇翁','冰翁'],
    'w,m':['岳母','丈母','老丈母','外母','泰水','外姑','老亲娘','丈人娘','老干娘','丈人婆','丈母娘','丈姥','丈姥娘','丈姆','岳母娘','丈母婆','丈姆婆','丈姆娘'],
    'w':['老婆','妻子','媳妇','媳妇儿','媳妇子','太太','妻','女人','新娘','爱姥','妻亲','娘子','新娘子','夫人','婆娘','老太婆','内人','内子','内助','贤内助','爱妻','发妻','婆姨','婆子','老婆子','老婆儿','老婆仔','堂客','爱人','老伴','那口子','配偶','伴侣','伉俪','卿卿'],
    'w,ob':['大舅子','大舅哥','大舅佬','大阿舅','丈人兄','舅哥'],
    'w,ob,w':['大舅妇','大妗子','大妗儿','大舅姆','大舅兄嫂','大舅嫂','大舅姐','大舅媳妇','丈人嫂'],
    'w,lb':['小舅子','小舅弟','小舅佬','小阿舅','丈人弟','舅弟'],
    'w,lb,w':['小舅妇','小妗子','小妗儿','小舅姆','小舅弟妇','小舅嫂','舅弟媳','小舅妹','小舅媳妇'],
    'w,xb':['舅子','舅佬','妻舅','老婆舅','阿舅','亲家舅','舅老倌'],
    'w,xb,w':['舅嫂','舅妇','舅姆','妻妗','妗仔','妗子','妗儿'],
    'w,xb,s':['舅侄男'],
    'w,xb,d':['舅侄女'],
    'w,os':['大姨子','大姨姐','大姨儿','姨姐'],
    'w,os,h':['大姨夫','大姨姐夫','姨姐夫','襟兄','大尹子'],
    'w,ls':['小姨子','小姨妹','小茙儿','姨妹','姨仔','姨妹子'],
    'w,ls,h':['小姨夫','小姨妹夫','姨妹夫','小茙夫','襟弟','小尹子'],
    'w,xs':['姨子','妻姨'],
    'w,xs,h':['连襟','姨夫','连桥','两桥','两乔','姨夫爷','老襟','一担挑','老挑','挑担','担儿挑','连襟儿','襟兄弟','友婿','妻尹','娅'],
    'w,xs,s':['姨甥'],
    'w,xs,d':['姨甥女'],
    // 兄弟姐妹系
    'ob':['哥哥','哥','胞兄','亲哥','兄亲','老哥','依哥','阿哥','兄台','大佬','家兄','兄长','元兄','长兄','几哥'],
    'ob,w':['嫂子','嫂','嫂嫂','阿嫂','家嫂','兄姊','兄嫂','兄妇','兄妻','几嫂'],
    'ob,s':['侄子','兄子'],
    'ob,d':['侄女','兄女'],
    'lb':['弟弟','弟','胞弟','亲弟','弟亲','老弟','依弟','阿弟','弟子','细佬','小弟','几弟'],
    'lb,w':['弟妹','弟媳','弟媳妇','弟媳妇子','弟新妇','老弟嫂'],
    'lb,s':['侄子','弟子'],
    'lb,d':['侄女','弟女'],
    'xb,s':['侄子','侄男','嫡侄','侄儿','侄儿子','侄','侄仔','阿侄','老侄'],
    'xb,s,w':['侄媳妇','侄媳','侄嫂','侄妇'],
    'xb,d':['侄女','侄囡','侄女儿','侄闺女'],
    'xb,d,h':['侄女婿','侄婿','侄郎'],
    'os':['姐姐','姐','胞姐','亲姐','姊亲','老姐','依姐','阿姐','姊台','家姐','长姐','姊仔','几姐'],
    'os,h':['姐夫','姐丈','姐婿','姐郎','姊兄','姐夫哥','胞姐夫'],
    'ls':['妹妹','妹','胞妹','亲妹','妹亲','老妹','依妹','阿妹','妹子','小妹','妹儿','几妹'],
    'ls,h':['妹夫','妹丈','妹婿','妹郎','妹弟','妹夫子','胞妹夫'],
    'xs,s':['外甥','甥子','甥男','甥儿','甥儿子','甥','甥仔'],
    'xs,s,w':['甥媳妇','甥媳','甥嫂','甥妇','甥儿息妇儿'],
    'xs,s,s':['甥孙','远甥','弥甥'],
    'xs,s,d':['甥孙女','远甥女','弥甥女'],
    'xs,d':['外甥女','甥女','甥囡','甥女儿','甥闺女'],
    'xs,d,h':['甥女婿','甥婿','甥郎','甥儿息婿儿'],
    // 子系
    's':['儿子','男儿','息男','闺男','囝囝','囝男','囝儿','小子','娃子','男亲','伢子','长子','次子','幼子','儿','仔','囝','子','阿仔','仔仔','后生','公子','少爷','一世孙'],
    's,w':['儿媳','儿媳妇','息妇儿','儿媳妇儿','新妇','新妇囝','心抱','息妇','儿妇','子妇','小妇','少奶奶','少夫人'],
    's,w,f':['亲家公'],
    's,w,f,f&o':['姻伯'],
    's,w,f,f&l':['姻叔'],
    's,w,m':['亲家母'],
    's,w,xb':['姻侄','世侄'],
    's,w,xb,w':['姻侄媳'],
    's,w,xb,s':['姻侄孙'],
    's,w,xb,d':['姻侄孙女'],
    's,w,xs':['姻侄女'],
    's,w,xs,h':['姻侄婿'],
    's,w,xs,s':['姻侄外孙'],
    's,w,xs,d':['姻侄外孙女'],
    's,s':['孙子','孙男','孙男儿','孙儿','长孙','孙仔','孙囝','孙娃子','孙伢子','二世孙'],
    's,s,w':['孙媳妇','孙媳','孙妇','孙息妇','孙新妇'],
    's,s,s':['曾孙','曾孙男','重孙','重孙子','息仔','三世孙'],
    's,s,s,w':['曾孙妇','重孙媳妇'],
    's,s,s,s':['玄孙','元孙','膀孙','四世孙'],
    's,s,s,s,w':['玄孙媳妇'],
    's,s,s,s,s':['来孙','五世孙'],
    's,s,s,s,s,w':['来孙媳妇'],
    's,s,s,s,s,s':['晜孙','六世孙'],
    's,s,s,s,s,s,w':['晜孙媳妇'],
    's,s,s,s,s,s,s':['仍孙','礽孙','七世孙'],
    's,s,s,s,s,s,s,w':['仍孙媳妇'],
    's,s,s,s,s,s,s,s':['云孙','八世孙'],
    's,s,s,s,s,s,s,s,w':['云孙媳妇'],
    's,s,s,s,s,s,s,s,s':['耳孙','远孙','九世孙'],
    's,s,s,s,s,s,s,s,s,w':['耳孙媳妇'],
    's,s,s,s,s,s,s,s,s,s':['弥孙','十世孙'],
    's,s,s,s,s,s,s,s,s,s,w':['弥孙媳妇'],
    's,s,s,s,s,s,s,s,s,s,s':['胎孙','十一世孙'],
    's,s,s,s,s,s,s,s,s,s,s,w':['胎孙媳妇'],
    's,s,s,s,s,s,s,s,s,s,s,s':['承孙','十二世孙'],
    's,s,s,s,s,s,s,s,s,s,s,s,w':['承孙媳妇'],
    's,s,s,s,s,s,s,s,s,s,s,d':['承孙女'],
    's,s,s,s,s,s,s,s,s,s,s,d,h':['承孙女婿'],
    's,s,s,s,s,s,s,s,s,s,d':['胎孙女'],
    's,s,s,s,s,s,s,s,s,s,d,h':['胎孙女婿'],
    's,s,s,s,s,s,s,s,s,s,d,s':['承外孙'],
    's,s,s,s,s,s,s,s,s,s,d,s,w':['承外孙媳妇'],
    's,s,s,s,s,s,s,s,s,s,d,d':['承外孙女'],
    's,s,s,s,s,s,s,s,s,s,d,d,h':['承外孙女婿'],
    's,s,s,s,s,s,s,s,s,d':['弥孙女'],
    's,s,s,s,s,s,s,s,s,d,h':['弥孙女婿'],
    's,s,s,s,s,s,s,s,s,d,s':['胎外孙'],
    's,s,s,s,s,s,s,s,s,d,s,w':['胎外孙媳妇'],
    's,s,s,s,s,s,s,s,s,d,d':['胎外孙女'],
    's,s,s,s,s,s,s,s,s,d,d,h':['胎外孙女婿'],
    's,s,s,s,s,s,s,s,d':['耳孙女'],
    's,s,s,s,s,s,s,s,d,h':['耳孙女婿'],
    's,s,s,s,s,s,s,s,d,s':['弥外孙'],
    's,s,s,s,s,s,s,s,d,s,w':['弥外孙媳妇'],
    's,s,s,s,s,s,s,s,d,d':['弥外孙女'],
    's,s,s,s,s,s,s,s,d,d,h':['弥外孙女婿'],
    's,s,s,s,s,s,s,d':['云孙女'],
    's,s,s,s,s,s,s,d,h':['云孙女婿'],
    's,s,s,s,s,s,s,d,s':['耳外孙'],
    's,s,s,s,s,s,s,d,s,w':['耳外孙媳妇'],
    's,s,s,s,s,s,s,d,d':['耳外孙女'],
    's,s,s,s,s,s,s,d,d,h':['耳外孙女婿'],
    's,s,s,s,s,s,d':['仍孙女','礽孙女'],
    's,s,s,s,s,s,d,h':['仍孙女婿'],
    's,s,s,s,s,s,d,s':['云外孙'],
    's,s,s,s,s,s,d,s,w':['云外孙媳妇'],
    's,s,s,s,s,s,d,d':['云外孙女'],
    's,s,s,s,s,s,d,d,h':['云外孙女婿'],
    's,s,s,s,s,d':['晜孙女'],
    's,s,s,s,s,d,h':['晜孙女婿'],
    's,s,s,s,s,d,s':['仍外孙'],
    's,s,s,s,s,d,s,w':['仍外孙媳妇'],
    's,s,s,s,s,d,d':['仍外孙女'],
    's,s,s,s,s,d,d,h':['仍外孙女婿'],
    's,s,s,s,d':['来孙女'],
    's,s,s,s,d,h':['来孙女婿'],
    's,s,s,s,d,s':['晜外孙'],
    's,s,s,s,d,s,w':['晜外孙媳妇'],
    's,s,s,s,d,d':['晜外孙女'],
    's,s,s,s,d,d,h':['晜外孙女婿'],
    's,s,s,d':['玄孙女','元孙女','膀孙女'],
    's,s,s,d,h':['玄孙女婿'],
    's,s,s,d,s':['来外孙'],
    's,s,s,d,s,w':['来外孙媳妇'],
    's,s,s,d,d':['来外孙女'],
    's,s,s,d,d,h':['来外孙女婿'],
    's,s,d':['曾孙女','重孙女','息女'],
    's,s,d,h':['曾孙女婿'],
    's,s,d,s':['玄外孙'],
    's,s,d,s,w':['玄外孙媳妇'],
    's,s,d,d':['玄外孙女'],
    's,s,d,d,h':['玄外孙女婿'],
    's,d':['孙女','孙女儿','孙囡','孙囡儿','女孙','孙女子'],
    's,d,h':['孙女婿','孙婿','孙郎','孙息婿'],
    's,d,s':['曾外孙','外息仔'],
    's,d,s,w':['曾外孙媳妇'],
    's,d,s,s':['曾外曾孙'],
    's,d,s,s,w':['曾外曾孙媳妇'],
    's,d,s,d':['曾外曾孙女'],
    's,d,s,d,h':['曾外曾孙女婿'],
    's,d,d':['曾外孙女','外息女'],
    's,d,d,h':['曾外孙女婿'],
    's,d,d,s':['曾外曾外孙'],
    's,d,d,s,w':['曾外曾外孙媳妇'],
    's,d,d,d':['曾外曾外孙女'],
    's,d,d,d,h':['曾外曾外孙女婿'],
    'd':['女儿','千金','小姐','掌上明珠','息女','闺女','囡囡','囡女','囡儿','乖囡','囡嗯','丫头','姑娘','妮子','女亲','长女','次女','幼女','女','阿女','女女'],
    'd,h':['女婿','姑爷','姑爷儿','女婿子','女婿儿','儿婿','子婿','息婿','小婿','快婿','郎婿','郎婿子','息婿儿','囝婿','囡婿','东床','半子','甥馆','女夫'],
    'd,h,f':['亲家公'],
    'd,h,f,f&o':['姻伯'],
    'd,h,f,f&l':['姻叔'],
    'd,h,m':['亲家母'],
    'd,h,xb':['姻侄','世侄'],
    'd,h,xb,w':['姻侄媳'],
    'd,h,xb,s':['姻侄孙'],
    'd,h,xb,d':['姻侄孙女'],
    'd,h,xs':['姻侄女'],
    'd,h,xs,h':['姻侄婿'],
    'd,h,xs,s':['姻侄外孙'],
    'd,h,xs,d':['姻侄外孙女'],
    'd,s':['外孙','外孙子','外孙儿'],
    'd,s,w':['外孙媳妇','外孙妇','外孙新妇'],
    'd,s,s':['外曾孙','重外孙','外息仔'],
    'd,s,s,w':['外曾孙媳妇','外曾孙妇'],
    'd,s,s,s':['外玄孙','外元孙','外膀孙'],
    'd,s,s,s,w':['外玄孙媳妇'],
    'd,s,s,d':['外玄孙女','外元孙女','外膀孙女'],
    'd,s,s,d,h':['外玄孙女婿'],
    'd,s,d':['外曾孙女','重外孙女','外息女'],
    'd,s,d,h':['外曾孙女婿','重外孙女婿'],
    'd,s,d,s':['外玄外孙'],
    'd,s,d,s,w':['外玄外孙媳妇'],
    'd,s,d,d':['外玄外孙女'],
    'd,s,d,d,h':['外玄外孙女婿'],
    'd,d':['外孙女','外孙囡','外孙女儿'],
    'd,d,h':['外孙女婿','外孙婿','外孙郎'],
    'd,d,s':['外曾外孙','外息仔'],
    'd,d,s,w':['外曾外孙媳妇'],
    'd,d,s,s':['外曾外曾孙'],
    'd,d,s,s,w':['外曾外曾孙媳妇'],
    'd,d,s,d':['外曾外曾孙女'],
    'd,d,s,d,h':['外曾外曾孙女婿'],
    'd,d,d':['外曾外孙女','外息女'],
    'd,d,d,h':['外曾外孙女婿'],
    'd,d,d,s':['外曾外曾外孙'],
    'd,d,d,s,w':['外曾外曾外孙媳妇'],
    'd,d,d,d':['外曾外曾外孙女'],
    'd,d,d,d,h':['外曾外曾外孙女婿'],
    // 和性别相关
    '1,xb,w,xb':['叔眷兄弟'],
    '1,xb,w,xb,s':['叔眷舅男'],
    '1,xb,w,xb,d':['叔眷舅女'],
    '1,xb,w,xs':['叔眷姊妹'],
    '1,xb,w,xs,s':['叔眷姨男'],
    '1,xb,w,xs,d':['叔眷姨女'],
    '1,xb,s':['从男','从子'],
    '1,xb,s,s':['从孙'],
    '1,xb,s,s,s':['从曾孙'],
    '1,xb,s,s,s,s':['从玄孙'],
    '1,xb,s,w':['从妇'],
    '1,xb,d':['从女','从子'],
    '1,xb,d,h':['从婿'],
    '1,xs,h,xb':['姑姻兄弟'],
    '1,xs,h,xb,s':['姑姻叔男'],
    '1,xs,h,xb,d':['姑姻叔女'],
    '1,xs,h,xs':['姑姻姊妹'],
    '1,xs,h,xs,s':['姑姻姑男'],
    '1,xs,h,xs,d':['姑姻姑女'],
    '1,xs,s,s':['离孙男','离孙子'],
    '1,xs,s,d':['离孙女'],
    '0,xb,w,xb':['舅眷兄弟'],
    '0,xb,w,xb,s':['舅眷舅男'],
    '0,xb,w,xb,d':['舅眷舅女'],
    '0,xb,w,xs':['舅眷姊妹'],
    '0,xb,w,xs,s':['舅眷姨男'],
    '0,xb,w,xs,d':['舅眷姨女'],
    '0,xs,h,xb':['姨姻兄弟'],
    '0,xs,h,xb,s':['姨姻叔男'],
    '0,xs,h,xb,d':['姨姻叔女'],
    '0,xs,h,xs':['姨姻姊妹'],
    '0,xs,h,xs,s':['姨姻姑男'],
    '0,xs,h,xs,d':['姨姻姑女'],
    '0,xb,s':['娘家侄子','娘家侄'],
    '0,xb,s,s':['归孙男','归孙子'],
    '0,xb,s,d':['归孙女'],
    '0,xb,d':['娘家侄女'],
    '0,xs,s':['姨甥','姨甥男','从男','从子'],
    '0,xs,s,w':['从妇'],
    '0,xs,d':['姨甥女','从女','从子'],
    '0,xs,d,h':['从婿'],
    '0,xs,s,s':['姨甥孙','姨孙','姨甥孙男','姨孙男'],
    '0,xs,s,d':['姨甥孙女','姨孙女'],
    '0,xs,d,s':['姨甥外孙','姨外孙','姨甥外孙男','姨外孙男'],
    '0,xs,d,d':['姨甥外孙女','姨外孙女'],
};
