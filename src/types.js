var types = (function () {
    var typeList = {
        actionscript: ['.as', '.mxml'],
        ada: ['.ada', '.adb', '.ads'],
        asm: ['.asm', '.s'],
        asp: ['.asp'],
        aspx: ['.master', '.ascx', '.asmx', '.aspx', '.svc'],
        batch: ['.bat', '.cmd'],
        cc: ['.c', '.h', '.xs'],
        cfmx: ['.cfc', '.cfm', '.cfml'],
        clojure: ['.clj'],
        cmake: ['.txt', '.cmake'],
        coffeescript: ['.coffee'],
        cpp: ['.cpp', '.cc', '.cxx', '.m', '.hpp', '.hh', '.h', '.hxx'],
        csharp: ['.cs'],
        css: ['.css'],
        dart: ['.dart'],
        delphi: ['.pas', '.int', '.dfm', '.nfm', '.dof', '.dpk', '.dproj', '.groupproj', '.bdsgroup', '.bdsproj'],
        elisp: ['.el'],
        elixir: ['.ex', '.exs'],
        erlang: ['.erl', '.hrl'],
        fortran: ['.f', '.f77', '.f90', '.f95', '.f03', '.for', '.ftn', '.fpp'],
        go: ['go'],
        groovy: ['.groovy', '.gtmpl', '.gpp', '.grunit', '.gradle'],
        haskell: ['.hs', '.lhs'],
        hh: ['.h'],
        html: ['.htm', '.html'],
        java: ['.java', '.properties'],
        js: ['.js'],
        json: ['.json'],
        jsp: ['.jsp', '.jspx', '.jhtm', '.jhtml'],
        less: ['.less'],
        lisp: ['.lisp', '.lsp'],
        lua: ['.lua'],
        make: ['.mk', '.mak'],
        matlab: ['.m'],
        md: ['.mkd', '.md'],
        objc: ['.m', '.h'],
        objcpp: ['.mm', '.h'],
        ocaml: ['.ml', '.mli'],
        parrot: ['.pir', '.pasm', '.pmc', '.ops', '.pod', '.pg', '.tg'],
        perl: ['.pl', '.pm'],
        perltest: ['.t'],
        php: ['.php', '.phpt', '.php3', '.php4', '.php5', '.phtml'],
        plone: ['.pt', '.cpt', '.metadata', '.cpy', '.py'],
        pmc: ['.pmc'],
        python: ['.py '],
        rake: ['Rakefile'],
        rr: ['.R'],
        ruby: ['.rb', '.rhtml', '.rjs', '.rxml', '.erb', '.rake', '.spec'],
        rust: ['.rs'],
        sass: ['.sass', '.scss'],
        scala: ['.scala'],
        scheme: ['.scm', '.ss'],
        shell: ['.sh', '.bash', '.csh', '.tcsh', '.ksh', '.zsh', '.fish'],
        smalltalk: ['.st'],
        sql: ['.sql', '.ctl'],
        tcl: ['.tcl', '.itcl', '.itk'],
        tex: ['.tex', '.cls', '.sty'],
        textile: ['.textile'],
        tt: ['.tt', '.tt2', '.ttml'],
        vb: ['.bas', '.cls', '.frm', '.ctl', '.vb', '.resx'],
        verilog: ['.v', '.vh', '.sv'],
        vhdl: ['.vhd', '.vhdl'],
        vim: ['.vim'],
        xml: ['.xml', '.dtd', '.xsl', '.xslt', '.ent'],
        yaml: ['.yaml', '.yml']
    };

    /**
     * return type array by lang name
     * @param {String} name
     * @returns {Array <string>}
     */
    var get = function (name) {
        return typeList[name] || '';
    };

    /**
     * return all types
     * @returns <Object>
     */
    var getAll = function () {
        return typeList;
    };

    return {
        get: get,
        getAll: getAll
    };
}());

module.exports = types;