function demo(data) {
    if (data == 0) {
        return;
    }
    console.log(data);
    demo(data - 1);
}

demo(10);