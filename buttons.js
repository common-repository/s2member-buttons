// JavaScript Document
(function() {
    tinymce.create('tinymce.plugins.membersites', {
        init : function(ed, url) {
            ed.addButton('membersites', {
                title : 'List Member Sites',
                image : url+'/membersites.png',
                onclick : function() {
					ed.selection.setContent('[membersites]');
 
                }
            });
            ed.addButton('eot', {
                title : 'Display Member EOT',
                image : url+'/eot.png',
                onclick : function() {
					ed.selection.setContent('[eot]');
 
                }
            });
            ed.addButton('loggedin', {
                title : 'If Logged In',
                image : url+'/loggedin.png',
                onclick : function() {
					ed.selection.setContent('[s2If is_user_logged_in()]' + ed.selection.getContent() + '[/s2If]');
 
                }
            });
            ed.addButton('notloggedin', {
                title : 'If Not Logged In',
                image : url+'/notloggedin.png',
                onclick : function() {
					ed.selection.setContent('[s2If !is_user_logged_in()]' + ed.selection.getContent() + '[/s2If]');
 
                }
            });
            ed.addButton('oneplus', {
                title : 'If Level 1 or Above',
                image : url+'/oneplus.png',
                onclick : function() {
					ed.selection.setContent('[s2If current_user_can(access_s2member_level1)]' + ed.selection.getContent() + '[/s2If]');
 
                }
            });
            ed.addButton('notoneplus', {
                title : 'If Not Level 1 or Above',
                image : url+'/notoneplus.png',
                onclick : function() {
					ed.selection.setContent('[s2If !current_user_can(access_s2member_level1)]' + ed.selection.getContent() + '[/s2If]');
 
                }
            });
            ed.addButton('one', {
                title : 'Level 1',
                image : url+'/one.png',
                onclick : function() {
					ed.selection.setContent('[s2If current_user_is(s2member_level1)]' + ed.selection.getContent() + '[/s2If]');
 
                }
            });
            ed.addButton('two', {
                title : 'Level 2',
                image : url+'/two.png',
                onclick : function() {
					ed.selection.setContent('[s2If current_user_is(s2member_level2)]' + ed.selection.getContent() + '[/s2If]');
 
                }
            });
            ed.addButton('three', {
                title : 'Level 3',
                image : url+'/three.png',
                onclick : function() {
					ed.selection.setContent('[s2If current_user_is(s2member_level3)]' + ed.selection.getContent() + '[/s2If]');
 
                }
            });
            ed.addButton('four', {
                title : 'Level 4',
                image : url+'/four.png',
                onclick : function() {
					ed.selection.setContent('[s2If current_user_is(s2member_level4)]' + ed.selection.getContent() + '[/s2If]');
 
                }
            });
            ed.addButton('zero', {
                title : 'Level 0',
                image : url+'/zero.png',
                onclick : function() {
					ed.selection.setContent('[s2If current_user_is(s2member_level0)]' + ed.selection.getContent() + '[/s2If]');
 
                }
            });
            ed.addButton('public', {
                title : 'Public',
                image : url+'/public.png',
                onclick : function() {
					ed.selection.setContent('[s2If !current_user_can(access_s2member_level0)]' + ed.selection.getContent() + '[/s2If]');
 
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('membersites', tinymce.plugins.membersites);
})();