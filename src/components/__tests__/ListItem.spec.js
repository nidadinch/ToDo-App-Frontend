import {shallowMount} from "@vue/test-utils";
import ListItem from "@/views/Home";

describe('ListItem.vue', function () {
    it("should component exists", () => {
        const wrapper = shallowMount(ListItem)
        expect(wrapper.exists()).toBeTruthy()
    })
});
