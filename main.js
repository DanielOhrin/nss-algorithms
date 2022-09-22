const productIds = ["ubkfmdjxyzlbgkrotcepvswaqx", "uikfmdkuyzlbgerotcepvswaqh", "uikfmdpxyzlbgnrotcepvswoeh", "ikfmdjxyzlbgnrotqepvswyqh", "qgkfmdjxyzlbgnmotcepvswaqh", "uikfmdjxyzqbgnrytcepvsbaqh", "uikfmdjxyzibgprotcecvswaqh", "uikfmajxyzlcgnrojcepvswaqh", "uvkfsdjxyzlbgnrotcepvjwaqh", "uikfmdjxfzlbggrotcepvswawh", "uikfmhjxyzlbgnuotcepvjwaqh", "uikfmdjxyzlbuzcotcepvswaqh", "uikfmdwxyzlbgnrotcepvfwamh", "uikfmdexyzlbgnroecepvswhqh", "uikfmdjuyzlbgnrotcqpvswafh", "uikfddjxyzvbgnrotceppswaqh", "yikfwdjxyzlbgnrotcepvswagh", "uiktmdjxyzlbgnrotceposwajh", "uikfmdsxyzlbgnroteetvswaqh", "uikfpdjxyzlbgnroncepvswuqh", "uikfmtjxyzlbgurotcepvswaoh", "eikfmdjxyjlbgnrotcepyswaqh", "uikfkdjxyzlbgnrotcepvszaqv", "uikfrdjxtwlbgnrotcepvswaqh", "uikfmdjxyzlbgnrotpepwswahh", "kikfmdjxyzlbgnkotcepvswqqh", "uikfkduxyzlbgnrotcepvswafh", "uikfxhjxyzlbgnrotcegvswaqh", "uikfmdjxyzlmgnrotcenvawaqh", "uzkfmddxyzlbgnrltcepvswaqh",
    "uikfmdjxyzlbgnrobcepisqaqh", "uijfmdjxyzlbgnrotcexvrwaqh", "uiwjmdjxyzlbgnrotceprswaqh", "uhkqmdjxwzlbgnrotcepvswaqh", "uiktmsjxyzwbgnrotcepvswaqh", "uikfmdjxyztbgnqotcepvswcqh", "uibfmdjxyzlbgnroqcepvswaqx", "uwkfmdjxyxlbgnrotcfpvswaqh", "uikumdjxyzlbgnrstceposwaqh", "uikfzdjxyznhgnrotcepvswaqh", "uikuydjxyzlbgnrotqepvswaqh", "uikfmdqxyzlbgnrotfefvswaqh", "yikfmdjxyzlbrnrqtcepvswaqh", "uiifmdjxyzlbenrotcfpvswaqh", "uxkjmdjxyzlbgnrotcmpvswaqh", "uikgmdjxyzlbgnrotceovlwaqh", "uikfmdjxyzvbgzrotcenvswaqh", "uiufmdjxyzlbgnrotceposwazh", "uiafmdjxyzlignmotcepvswaqh", "uikfmdjxyzwbgnsotlepvswaqh", "uikjmdjvyzlbgnrotcenvswaqh", "uikfmdjxyzlbonroteepvswaqi", "uikfmdjxyzldgnroxcepviwaqh", "uikvmdjxyzlbgdrotrepvswaqh", "uikfmdjyyzwbgnrotcepvzwaqh", "uikfmdjxyzzbnnvotcepvswaqh", "uikomdjxyzlbgnrotcepvuwhqh", "uikfmmjxyzbbgnrotcepvswayh", "uikfmdjfezlbgprotcepvswaqh", "uzkfmojxmzlbgnrotcepvswaqh",
    "uipfmdjxyzlbgnrotceyuswaqh", "uikfmdjxyzlkgnmotcepvswadh", "uikfmdjxyzlbgnuctcbpvswaqh", "uikfqdjxyzlbogrotcepvswaqh", "uikfmdjxyzlfynrotcepvswash", "uikfmdjxizzmgnrotcepvswaqh", "uhkfmdjxyzlbhnrotcenvswaqh", "uipfmdjxyzlbgorotcepfswaqh", "uikfmdjxyznbgnrotcepvswfah", "uikfmujxyzlbgnrotnepvssaqh", "uikfmdjxyzlxgnrotcepvsrwqh", "uikfmdjxszlbgnrottvpvswaqh", "umkfmdskyzlbgnrotcepvswaqh", "uikfmdjxyzlbgorotcwpzswaqh", "uikfmdhxyzzbgnzotcepvswaqh", "jikfmdjxyzlbgnrotcepveyaqh", "uirfmdlxyzlbgnjotcepvswaqh", "uikfmdjxyzlbgnrorxepvswazh", "uikfmdjxyzltgnrotcepvsxaqi", "uikfmdjxyzlbxlrotcepkswaqh", "uvkfmdjxyzlbgnrotcopvswxqh", "uxkfmdjxkzlbgnrotcepvswqqh", "uikfmdjxyzlbqnrotcepvhwrqh", "uikfmdjxyzlvgnrolcepvswrqh", "urkfmdixyzlbgnrotcepvsjaqh", "uikfmdjxymlbsnrotcepvswcqh", "uikfmdjxyilbgnrotcepvcwzqh", "uikfadjxlzlbgnrotcepvswaql", "uikfmdjxuzlbgdrotcgpvswaqh", "yikfmdgxyzlbgnrotcepvswarh",
    "uikfmdjxyzlbgorotcepcswaqv", "uikkmdjxyzlbvnrotcepvvwaqh", "uwzfmdjxyxlbgnrotcfpvswaqh", "uikfmdjxyztbgnrotcrtvswaqh", "uiufmdjxyzhbgnrotcupvswaqh", "uikfzdjcyzlbgnrotcfpvswaqh", "uipfmdjxyzlbgnrotavpvswaqh", "uikfmajxyzlbgnrotcepbsxaqh", "uikfmdjfyzlbgnrotbepvswmqh", "gikkmdjxyzlbgnrptcepvswaqh", "uikfmdjxqvlbgnrotsepvswaqh", "fikfmdjxyzlbgnrotcegvswoqh", "idkfmdjxyzlbgnrotcepwswaqh", "uikfmdqxyzlbmnrobcepvswaqh", "uikfmdjxyzpbgnroicepvsyaqh", "uikfmkoxyzlbgnrotcgpvswaqh", "unkfmdjxyzlbpnrolcepvswaqh", "uikfmdjmyzlbgfrotcupvswaqh", "ujkfmdjxynlbgnroteepvswaqh", "uikfmljxyzlbgnaotcepvsiaqh", "uikfmdjdyzlbgnrotcepvtwaqd", "uikfmdjxyzlbgnyotcepimwaqh", "uikfmdjxyzfbjnrotcepvxwaqh", "eiwfmdjxyzlbgnrdtcepvswaqh", "umkhmdjxyzlbgnrotceivswaqh", "uikfmdjxyzlbgnrotcwpvswneh", "uckfmdjxyzlbknrotcepvswauh", "uiofmdjoyzlbgnrbtcepvswaqh", "uikfmdbxyzlbgnrotcepaslaqh", "uimfmdjxyalbgnrotcepvswaxh",
    "uqkfmdjxyzlbwnrotcepmswaqh", "uiyfmdjxyzlbgnrotcepvswxuh", "uikfmdjxyzlbgmrotgepvswamh", "uikfmdjxyqlbgarozcepvswaqh", "uikfmdjxyzabanpotcepvswaqh", "uikfmdjgyzlbsnrotcepvswaqj", "uikfmdjxyzlbwnrottepvsvaqh", "uikfmdjxyzlbbnrotcepvofaqh", "uikfudjxyzlbgnustcepvswaqh", "cskfmqjxyzlbgnrotcepvswaqh", "uiwfmddxyzlbgnrotccpvswaqh", "eikpmdjxyzlbgnrotcesvswaqh", "uikfmdzxyzlngnrrtcepvswaqh", "uikfmdjxyzlbgnrotcepaswtph", "uirfmdjxyzlbgnrotcepvswsqe", "uikjmdjxqzlbgirotcepvswaqh", "uikfmdjxsllbknrotcepvswaqh", "uikfmdjxyqlbgcrotcepvswaqu", "uikfmdjsymlbgnrotcebvswaqh", "uikfmdjxezlbgnroccepviwaqh", "uikfmdjiyzjbgnrotcepvswarh", "uqkfmdjxyzmbgnrotcepvslaqh", "unkfmdjxyzlbinrotceplswaqh", "uikfmdjxyzpbgnrjtcedvswaqh", "uicfmdjxyzlbgrrotcepvswamh", "ukknmdjxyzlbgnqotcepvswaqh", "uikfudjxyzlbdnrztcepvswaqh", "uikfmdjxyzlbgnrozcepvswawk", "uikfmduxyzsbgnrotcepvswauh", "uikfmdjxyzljbnrotcenvswaqh",
    "uukfmdjxyzlbgnrotcckvswaqh", "uilfldjxyzlbgnrotcdpvswaqh", "uckfmdjxyvybgnrotcepvswaqh", "qikfmdjxyglbgnrotcepvrwaqh", "uikfmhjxyzltgnrotcepvswbqh", "uikfmdjxipabgnrotcepvswaqh", "uikfmdjxyzlbgnrotceovswanl", "uikfmdjxyzlbgirotcapvswahh", "uikfucjxyflbgnrotcepvswaqh", "pikfmdjxyzpbgnrotcepvswaeh", "uikfmdjiyylbgnrotcervswaqh", "uikfmdjgyzlbgnrotcaevswaqh", "uikvmdjxyzlbunrotcepvswarh", "uikfadjuyzpbgnrotcepvswaqh", "uikfmdjxyzlbgnrotcepsawaqj", "eikfmdjxyflbgnrotcepvswaeh", "uisfmdaxyzlbgnrotcepvswlqh", "vikfmdjxyzlzgnrotcepvswanh", "ukkfmdoxyzlbgnrotcewvswaqh", "uikfmdhxyzlbgnrotcrpvbwaqh", "uhkfmdjwezlbgnrotcepvswaqh", "uikfddjxyzlbgnroteepvpwaqh", "uikfmdjxczlbgncotiepvswaqh", "uikfvdjxyzlbgnrotcnpvsaaqh", "uikfmdjxyzlbgnritcepvlwmqh", "uikfmdjxczlcgnrotcecvswaqh", "mikfmdjxyzlbgnrotcepvswasi", "uifvmdjxyzlbgnrotpepvswaqh", "uikzmdjxyzlbgnrotrepvswaqs", "uikfmqjqyzlbunrotcepvswaqh",
    "uikfpdyxyzlbgnrotcepvswagh", "uikfmdjxyzobgnrotrlpvswaqh", "zisdmdjxyzlbgnrotcepvswaqh", "uikfmdjxyzlbgnlotiesvswaqh", "uikfddixyzlbgnroucepvswaqh", "uijfmdrxyzlbgnrotoepvswaqh", "uikfmdcxbzlbgnrotcepvpwaqh", "uikfmdjxxzlbfnrotcecvswaqh", "upkfmdjxyzmtgnrotcepvswaqh", "uikfmdrxyzlbgnrjtcepvswaqp", "uizfmdjxyzlbsnrotcepviwaqh", "uidfmdjxyslbgnrotcxpvswaqh", "uikfmdjxyzlbgnrovyepvsdaqh", "uiafmdjxyzlbgnrxtcepvsdaqh", "ugkfmdjxyzlbgnrodcepvswawh", "pikfmtjxyzhbgnrotcepvswaqh", "uikfmdjxyzlfgnvotcepvswtqh", "uikbmdjxyzlbgerotcepvswaqm", "uikfmdjxyhlbdnrotcepvswaqy", "uikfgdjxyzlbgnhotcepvswdqh", "uikfmdpxyzlbgnrotcepvscanh", "uikfmdjxyzsbgnretcepvswaqn", "uikfddjxyzlrgnrotcepvsbaqh", "uikfmdjxyzlbgnrotcqnrswaqh", "uhkfmejxyzlbgnrotvepvswaqh", "uikimdjxyzlngnrotceprswaqh", "uikfmdjxyzwbunrotiepvswaqh", "rikfmdjxyzlbgnrotcypvssaqh", "uikfmdjxyzlbdnrotcrpvswsqh", "uekfmdjxkzlbznrotcepvswaqh",
    "uikfmdjxyglbgvrotcepvswaqv", "uikfmcjxyzlbgnrotmeovswaqh", "uikfmdjxyznbgnrozcepvswaqm", "uikfmdjxyzlbdnrotcepdsyaqh", "umkfmdjxfzlbgnrotiepvswaqh", "uitfmdjxyzvbcnrotcepvswaqh", "uikfmdjqyzlbgnrvtcepvlwaqh", "uikfmdjxyzkbworotcepvswaqh", "uikfmdzxyzlbwnrotcypvswaqh", "uikfmdjxyklbgnrftyepvswaqh", "uinfmsjxyzlbgnrotcepsswaqh", "xisfmdjxymlbgnrotcepvswaqh", "uikfmdjxjzlbgnropcepvswaqv", "uikfmdjxyalegyrotcepvswaqh", "uikfydjxyzlbgnrotcekvswtqh", "uikwmojxyzlbgnromcepvswaqh", "uikdmdjayzlbgnrotcepvswzqh", "uikfmdjxyzlmvnrotctpvswaqh", "uikfmbjxyzlbgnrotceptsweqh", "yvkfmdjxyzlbgqrotcepvswaqh", "uikomdjxfxlbgnrotcepvswaqh", "uikfmdjxczlbgnroocepgswaqh", "uikemdjxizlbgnrotcegvswaqh", "uikdmdjxyzlbgwrotceprswaqh", "tiyfmdjfyzlbgnrotcepvswaqh", "tmkfmdjxyzlbgirotcepvswaqh", "uikfmdjxyzebgnzotcepqswaqh", "uikfmljxyzlbgnrwtcepvswaeh", "uikfmojxyzlbgnrotcepbswwqh", "uikfmdjxyzlbgsrotcewvswwqh",
    "uikfmdjhyzlbgdrogcepvswaqh", "uikfmvjxyzlbrnrltcepvswaqh", "jikfmdjxyzlbgnrotcepvgcaqh", "uikhtdjxyzlbgnrotcepvswarh", "uikfmdjxyezbgnritcepvswaqh", "uikfwdjxyzlbgnrotzepvsnaqh", "uikfmdjxqylbgnrobcepvswaqh", "zikzmdjxyzlbgnrhtcepvswaqh", "uiksmzjxyzlbgnrftcepvswaqh", "uikfmdjxuzlbgnrotcepvsvaqc"]

// Define a function named CheckMatching (array)
    // If the strings are matching except for one letter, return that string (minus the letter)
    // Otherwise, move on to the next letter after removing one and checking them.

const checkMatching = (array) => {
    let match;
    
    for (const string of array) {
        let copyOfArray = [ ...array ]
        copyOfArray.splice(array.indexOf(string), 1)
        
        let idOne = Array.from(string)
        
        for (const id of copyOfArray) {
            let indecesNotMatching = []
            let idTwo = Array.from(id)
            let index = 0

            for (const letter of idTwo) {
                if (letter !== idOne[index]) {
                    indecesNotMatching.push(idTwo.indexOf(letter))
                }
                index ++
            }

            if (indecesNotMatching.length === 1) {
                match = [...string]
                match.splice(indecesNotMatching[0], 1)
            }

        }

        if (match) {
            break;
        }
    }

    return match.join("")
}

checkMatching(productIds)